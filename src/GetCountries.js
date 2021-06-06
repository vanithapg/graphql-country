import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { LOAD_COUNTRIES } from "./GraphQL/Queries";
import Country from "./Country";

export default function GetCountries() {
  const { error, loading, data } = useQuery(LOAD_COUNTRIES);
  const [countryList, setCountryList] = useState([]);

  useEffect(() => {
    if (data && data.countries.length) {
      console.log(data.countries);
      setCountryList(data.countries);
    }
  }, [data]);

  return (
    <div>
      <h1>Countries List</h1>
      {countryList.map((c, i) => (
        <Country country={c} key={i} />
      ))}
    </div>
  );
}
