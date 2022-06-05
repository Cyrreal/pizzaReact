import { useState } from "react";
import s from "./Popup.module.css";
type Props = {
  elem: any;
  pathLink: string;
  thiknes: number;
  size: string;
  orderCostSum: (event: any) => void;
  choosed: any;
  sizes: number;
};
export function PopupCard({
  elem,
  pathLink,
  thiknes,
  size,
  orderCostSum,
  choosed,
}: Props) {
  const { variationPrices } = elem;
  const filteredPrice = variationPrices.filter((item) => {
    return item.sizeGroup === size && item.doughType === thiknes;
  });
  const price = filteredPrice[0].price;

  return (
    <>
      <label>
        <input
          className={s.checked}
          type="checkBox"
          id={elem.name}
          name={elem.name}
          value={price}
          onChange={(event) => orderCostSum(event)}
        />

        <div className={s.card} key={elem.name}>
          <img
            className={s.cardImg}
            src={pathLink + elem.menuImagePath}
            alt={"topping"}
          />
          <h3 className={s.cardTitle}>{elem.name}</h3>
          <p className={s.cardDescr}>{price}₽</p>
        </div>
      </label>
    </>
  );
}
