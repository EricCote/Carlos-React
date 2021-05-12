import React, { useState, useEffect } from "react";
import { Button, Spinner } from "reactstrap";
import { DisplayCountries } from "./DisplayCountries";

export default function Covid() {
  const [countries, setCountries] = useState([]);
  const [isLoading, setLoading] = useState(false);

  async function getData() {
    setLoading(true);
    const resp = await fetch(
      "https://disease.sh/v3/covid-19/countries?sort=cases"
    );
    const data = await resp.json();
    setCountries(data);
    setLoading(false);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1>Covid Cases</h1>
      <Button color="primary" className="my-3" onClick={getData}>
        Refresh data
      </Button>
      {isLoading ? (
        <div className="my-3">
          <Spinner>&nbsp;</Spinner>
        </div>
      ) : (
        <DisplayCountries countries={countries} />
      )}
    </>
  );
}
