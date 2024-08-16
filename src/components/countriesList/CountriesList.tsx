import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Country } from "../../types";
import { URL } from "../../constants";

import s from "./CountriesList.module.css";

export const CountriesList = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getCounties = async () => {
      try {
        const response = await fetch(`${URL}/all`);

        if (response.ok) {
          const data = await response.json();
          setCountries(data);
        } else {
          const json = await response.json();
          setError(json.message);
        }
      } catch (error) {
        console.error(`Error fetching data: ${error}`);
        setError("Error fetching data");
      }
    };

    getCounties();
  }, []);

  if (error) return <>{error}</>;

  return (
    <div>
      <h1>List of Countries</h1>
      <ul className={s.countriesList}>
        {countries.map(({ ccn3, name }) => {
          return (
            <li key={ccn3} className={s.countriesListItem}>
              <NavLink
                className={s.navLink}
                to={`country/${name.common}`}
              >{`${name.common}`}</NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
