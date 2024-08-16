import { useEffect, useState } from "react";
import { Country } from "./types";
import { CountryItem } from "./components/countryItem/CountryItem";
import { CountriesList } from "./components/countriesList/CountriesList";
import { URL } from "./constants";
import "./App.css";

export const App = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(URL);
        const data = await response.json();

        setCountries(data);
        setSelectedCountry(data[0]);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  return (
    <div className="container">
      <nav className="sidebar">
        <CountriesList
          countries={countries}
          setSelectedCountry={setSelectedCountry}
        />
      </nav>
      <section className="content">
        {selectedCountry ? (
          <CountryItem country={selectedCountry} />
        ) : (
          "Выберите из списка"
        )}
      </section>
    </div>
  );
};
