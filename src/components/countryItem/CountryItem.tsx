import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Country } from "../../types";
import { URL } from "../../constants";

import s from "./CountryItem.module.css";

export const CountryItem = () => {
  const [country, setCountry] = useState<Country | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { name } = useParams();

  useEffect(() => {
    const getCounties = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`${URL}/name/${name}`);

        if (response.ok) {
          const data = await response.json();
          setCountry(data[0]);
        } else {
          const json = await response.json();
          setError(json.message);
        }

        setIsLoading(false);
      } catch (error) {
        console.error(`Error fetching country data: ${error}`);
        setError("Error fetching country data");
      }
    };

    getCounties();
  }, [name]);

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>{error}</div>;

  return (
    country && (
      <div className={s.country}>
        <div>Country name: {country.name.common}</div>
        <div>Region: {country.region}</div>
        <div>Capital: {country.capital}</div>
        <div>Flag: {country.flag}</div>
        <div className={s.countryImageWrapper}>
          <img
            className={s.countryImage}
            src={country.flags.png}
            alt={country.flags.alt}
          />
        </div>
      </div>
    )
  );
};
