import React, { FC, memo } from "react";
import { Country } from "../../types";
import s from "./CountriesList.module.css";

interface CountriesListProps {
  countries: Country[];
  setSelectedCountry: (country: Country) => void;
}

const arePropsEqual = (
  oldProps: CountriesListProps,
  newProps: CountriesListProps
) => {
  return JSON.stringify(oldProps) === JSON.stringify(newProps);
};

export const CountriesList: FC<CountriesListProps> = memo(
  ({ countries, setSelectedCountry }) => (
    <ul className={s.countriesList}>
      {countries.map((country) => {
        return (
          <li
            key={country.ccn3}
            className={s.countriesListItem}
            onClick={() => setSelectedCountry(country)}
          >{`${country.name.common}`}</li>
        );
      })}
    </ul>
  ),
  arePropsEqual
);
