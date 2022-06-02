import { useState } from "react";
import s from "./Popup.module.css";
import { PopupCard } from "./PopupCard";
type Props = {
  setThisPizza: (arg: any) => void;
  pizzas: any;
};
export function Popup({ pizzas, setThisPizza }: Props) {
  console.log(pizzas);
  const { description, name, products, productToppings, sizes } = pizzas;
  const price = products[0].menuProduct.price.value;
  const image = products[0].menuProduct.product.productImages[3].url;
  const pathLink =
    "https://raw.githubusercontent.com/Saint-Code-Bootcamp/pizza-house/main/images/";
  const imgLink = pathLink + `${image}`;
  const small = sizes[0];
  const medium = sizes[1];
  const large = sizes[2];
  const [size, setSize] = useState(small);
  const [thiknes, setThiknes] = useState("traditional");
  const [choosed, setChoosed] = useState();

  return (
    <div className={s.popup}>
      <div
        className={s.close}
        onClick={() => {
          setThisPizza("");
        }}
      >
        X
      </div>
      <div className={s.body}>
        <div className={s.content}>
          <div className={s.pizza}>
            <div className={s.background}>
              <img className={s.img} src={imgLink} />
            </div>
          </div>
          <div className={s.description}>
            <div>
              <h2 className={s.title}>{name}</h2>
              <p className={s.text}>{description}</p>
              <div className={s.size}>
                <p
                  className={`${s.selector} ${
                    size === small ? s.selected : ""
                  }`}
                  onClick={() => setSize(small)}
                >
                  Маленькая
                </p>
                <p
                  className={`${s.selector} ${
                    size === medium ? s.selected : ""
                  }`}
                  onClick={() => setSize(medium)}
                >
                  Средняя
                </p>
                <p
                  className={`${s.selector} ${
                    size === large ? s.selected : ""
                  }`}
                  onClick={() => setSize(large)}
                >
                  Большая
                </p>
              </div>
              <div className={s.dough}>
                <p
                  className={`${s.selector2} ${
                    thiknes === "traditional" ? s.selected : ""
                  }`}
                  onClick={() => setThiknes("traditional")}
                >
                  Традиционное
                </p>
                <p
                  className={`${s.selector2} ${
                    thiknes === "slim" ? s.selected : ""
                  }`}
                  onClick={() => setThiknes("slim")}
                >
                  Тонкое
                </p>
              </div>
            </div>
            <div className={s.add}>
              <h2 className={s.subtitle}>Добавить в пиццу</h2>
              <div className={s.grid}>
                {productToppings.length ? (
                  productToppings.map((elem) => {
                    return (
                      <PopupCard
                        // onClick={()=>{setChoosed(elem)}}
                        choosed={choosed}
                        elem={elem}
                        size={size}
                        thiknes={thiknes}
                        pathLink={pathLink}
                        sizes={sizes}
                      />
                    );
                  })
                ) : (
                  <p>Для этой пиццы недоступны топпинги</p>
                )}
              </div>
            </div>
          </div>
        </div>
        <button className={s.button}>Добавить в корзину за {price}</button>
      </div>
    </div>
  );
}
