import React, { useState } from "react";
import { Input, Table } from "reactstrap";

const formatNum = new Intl.NumberFormat("en-US").format;

export function DisplayCountries({ countries }) {
  const [countryFilter, setCountryFilter] = useState("");

  const filteredCountries = countries.filter(
    (country) =>
      country.country.toLowerCase().includes(countryFilter.toLowerCase()) &&
      country.countryInfo?._id
  );

  return (
    <>
      <Input
        value={countryFilter}
        className="my-3"
        placeholder="Filter by country"
        onChange={(evt) => {
          setCountryFilter(evt.target.value);
        }}
      />
      <Table dark color="dark" striped>
        <thead>
          <tr>
            <th>Flag</th>
            <th>Country</th>
            <th>Cases Today</th>
            <th>Total Cases</th>
            <th>Deaths Today</th>
          </tr>
        </thead>
        <tbody>
          {filteredCountries.map((country) => (
            <tr key={country.countryInfo._id}>
              <td>
                <img
                  src={country.countryInfo.flag}
                  height="30"
                  width="45"
                  alt={`flag of ${country.country}`}
                />
              </td>
              <td>{country.country}</td>
              <td>{formatNum(country.todayCases)}</td>
              <td>{formatNum(country.cases)}</td>
              <td>{formatNum(country.todayDeaths)}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th></th>
            <th></th>
            <th>
              {formatNum(
                countries.reduce((totalCases, country) => {
                  return totalCases + country.todayCases;
                }, 0)
              )}
            </th>
            <th>
              {formatNum(
                countries.reduce((total, country) => {
                  return total + country.cases;
                }, 0)
              )}
            </th>
            <th>
              {formatNum(
                countries.reduce((total, country) => {
                  return total + country.todayDeaths;
                }, 0)
              )}
            </th>
          </tr>
        </tfoot>
      </Table>
    </>
  );
}
