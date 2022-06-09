import { useState } from "react";
import s from "./Popup.module.css";
type Props = {
  elem: any;
  pathLink: string;
  thiknes: number;
  size: string;
  orderCostSum: (event: any) => void;
  setChoosed: (event: any) => void;
  choosed: any;
  sizes: number;
};
export function PopupCard({
  elem,
  pathLink,
  thiknes,
  size,
  choosed,
  orderCostSum,
  setChoosed,
}: Props) {
  const { variationPrices } = elem;
  const filteredPrice = variationPrices.find((item) => {
    return item.sizeGroup === size && item.doughType === thiknes;
  });
  const price = filteredPrice.price;

  const toppingsChekedPrice = (arg: boolean, name: string) => {
    if (arg === true) {
      setChoosed([...choosed, elem]);
    } else {
      setChoosed((prevState) => prevState.filter((el) => el.name !== name));
    }
  };

  return (
    <>
      <label>
        <input
          className={s.checked}
          type="checkBox"
          id={elem.name}
          name={elem.name}
          value={price}
          onChange={(event) =>
            toppingsChekedPrice(event.target.checked, elem.name)
          }
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
