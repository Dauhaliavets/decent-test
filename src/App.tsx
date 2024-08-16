import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CountryItem } from "./components/countryItem/CountryItem";
import { CountriesList } from "./components/countriesList/CountriesList";
import s from "./App.module.css";

export const App = () => {
  return (
    <div className={s.container}>
      <Router>
        <Routes>
          <Route path="/" element={<CountriesList />} />
          <Route path="/country/:name" element={<CountryItem />} />
        </Routes>
      </Router>
    </div>
  );
};
