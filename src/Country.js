import { useState } from "react";

import CountryDetails from "./CountryDetails";

export default function Country({ country }) {
  const { name, emoji, code } = country;
  const [details, setDetails] = useState(false);

  function fetchCountry(details) {
    setDetails(!details);
  }

  return (
    <div style={{ backgroundColor: "skyblue", borderStyle: "inset" }}>
      <h1>
        {name} {emoji}
      </h1>
      <button onClick={() => fetchCountry(details)}>
        {details ? "Hide" : "Show"} Details
      </button>
      {details && <CountryDetails code={code} />}
    </div>
  );
}
