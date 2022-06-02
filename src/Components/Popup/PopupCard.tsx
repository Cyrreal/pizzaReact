import { useState } from "react";
import s from "./Popup.module.css";
type Props = {
  elem: any;
  pathLink: string;
  thiknes: string;
  size: string;
  choosed: any;
  sizes: any[];
};
export function PopupCard({
  elem,
  pathLink,
  thiknes,
  size,
  choosed,
  sizes,
}: Props) {
  const small = sizes[0];
  const medium = sizes[1];
  const large = sizes[2];
  console.log(small, medium, large);
  return (
    <div className={s.card} key={elem.id}>
      <img
        className={s.cardImg}
        src={pathLink + elem.menuImagePath}
        alt={"topping"}
      />
      <h3 className={s.cardTitle}>{elem.name}</h3>
      {thiknes === "slim" && size === small && (
        <p className={s.cardPrice}>{elem.variationPrices[0].price}₽</p>
      )}
      {thiknes === "traditional" && size === small && (
        <p className={s.cardPrice}>{elem.variationPrices[0].price}₽</p>
      )}
      {thiknes === "traditional" && size === medium && (
        <p className={s.cardPrice}>{elem.variationPrices[1].price}₽</p>
      )}
      {thiknes === "traditional" && size === large && (
        <p className={s.cardPrice}>{elem.variationPrices[2].price}₽</p>
      )}
      {thiknes === "slim" && size === medium && (
        <p className={s.cardPrice}>{elem.variationPrices[3].price}₽</p>
      )}
      {thiknes === "slim" && size === large && (
        <p className={s.cardPrice}>{elem.variationPrices[4].price}₽</p>
      )}
    </div>
  );
}
