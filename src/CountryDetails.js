import { useState, useEffect } from "react";
import { FETCH_COUNTRY } from "./GraphQL/Queries";
import { useQuery, gql } from "@apollo/client";

export default function CountryDetails({ code }) {
  //   const { code } = details;
  //   console.log(details, "details called");

  const { loading, error, data } = useQuery(FETCH_COUNTRY, {
    variables: { code },
  });

  const [selectedCountry, setSelectedCountry] = useState([]);
  const { capital, language, currency } = selectedCountry;

  useEffect(() => {
    if (data && data.country) {
      console.log(data.country, "selected country");
      setSelectedCountry(data.country);
    }
  }, [data]);

  return (
    <div>
      <> Capital is : {capital}</>
    </div>
  );
}
