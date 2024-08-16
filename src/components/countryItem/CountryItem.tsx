import { FC } from "react";
import { Country } from "../../types";
import s from "./CountryItem.module.css";

interface CountryItemProps {
  country: Country;
}

export const CountryItem: FC<CountryItemProps> = ({
  country: { name, region, capital, flag, flags },
}) => (
  <div className={s.country}>
    <div>{region}</div>
    <div>{capital}</div>
    <div>{flag}</div>
    <div className={s.countryImageWrapper}>
      <img className={s.countryImage} src={flags.png} alt={flags.alt} />
    </div>
    <div className={s.countryName}>{name.common}</div>
  </div>
);
