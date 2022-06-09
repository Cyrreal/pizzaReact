import { useState, useEffect } from "react";
import { getJSDocClassTag } from "typescript";
import s from "./Popup.module.css";
import { PopupCard } from "./PopupCard";
type Props = {
  onClick: (arg: any) => void;
  pizzas: any;
};
export function Popup({ pizzas, onClick }: Props) {
  const { description, name, products, productToppings, sizes } = pizzas;
  const image = products[0].menuProduct.product.productImages[3].url;
  const pathLink =
    "https://raw.githubusercontent.com/Saint-Code-Bootcamp/pizza-house/main/images/";
  const imgLink = pathLink + `${image}`;
  const small = sizes[0];
  const medium = sizes[1];
  const large = sizes[2];
  const [size, setSize] = useState(small);
  const [thiknes, setThiknes] = useState(1);
  const [choosed, setChoosed] = useState<any>([]);
  console.log(choosed);

  const filteredPrice = products.find((item) => {
    return item.sizeGroup === size && item.dough === thiknes;
  });

  const toppingPrice = choosed.map((item) => {
    const { price } = item.variationPrices.find((item) => {
      return item.sizeGroup === size && item.doughType === thiknes;
    });
    return price;
  });

  const initialValue = 0;
  const choosedPrice = toppingPrice.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
  );

  const price = filteredPrice.menuProduct.price.value + choosedPrice;
  console.log(price);
  const [cost, setCost] = useState(price);
  // console.log(cost);

  useEffect(() => {
    //здесь бы как нить обнулять все чекбоксы
    setCost(price);
  }, [size]);

  const orderCostSum = (event: any) => {
    if (event.target.checked === true) {
      setCost(+event.target.defaultValue + cost);
    } else if (event.target.checked === false) {
      setCost(cost - +event.target.defaultValue);
    }
  };

  return (
    <div className={s.popup}>
      <div className={s.container}>
        <div className={s.body}>
          <div
            className={s.close}
            onClick={() => {
              onClick("");
            }}
          >
            X
          </div>
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
                  {thiknes === 2 ? (
                    <>
                      <p
                        className={`${s.slimDoughSelector} ${
                          size === medium ? s.selected : ""
                        }`}
                        onClick={() => setSize(medium)}
                      >
                        Средняя
                      </p>
                      <p
                        className={`${s.slimDoughSelector} ${
                          size === large ? s.selected : ""
                        }`}
                        onClick={() => setSize(large)}
                      >
                        Большая
                      </p>
                    </>
                  ) : (
                    <>
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
                    </>
                  )}
                </div>
                <div className={s.dough}>
                  {size === 1 ? (
                    <p className={`${s.smallSizeSelector} ${s.selected} `}>
                      Традиционное
                    </p>
                  ) : (
                    <>
                      <p
                        className={`${s.selector2} ${
                          thiknes === 1 ? s.selected : ""
                        }`}
                        onClick={() => setThiknes(1)}
                      >
                        Традиционное
                      </p>
                      <p
                        className={`${s.selector2} ${
                          thiknes === 2 ? s.selected : ""
                        }`}
                        onClick={() => setThiknes(2)}
                      >
                        Тонкое
                      </p>
                    </>
                  )}
                </div>
              </div>
              <div className={s.add}>
                <h2 className={s.subtitle}>Добавить в пиццу</h2>
                <div className={s.grid}>
                  {productToppings.length ? (
                    productToppings.map((elem, index) => {
                      return (
                        <PopupCard
                          // onClick={()=>{setChoosed(elem)}}
                          key={elem.name}
                          // id={index}
                          setChoosed={setChoosed}
                          choosed={choosed}
                          elem={elem}
                          size={size}
                          thiknes={thiknes}
                          pathLink={pathLink}
                          sizes={sizes}
                          orderCostSum={orderCostSum}
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
    </div>
  );
}
