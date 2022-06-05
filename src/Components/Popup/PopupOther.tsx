import s from "./PopupOthers.module.css";
type Props = {
  onClick: (arg: any) => void;
  eats: any;
};

export function PopupOther({ onClick, eats }: Props) {
  console.log(eats);
  const { price, product } = eats;
  console.log(price, product);
  const imgLink =
    "https://raw.githubusercontent.com/Saint-Code-Bootcamp/pizza-house/main/images/";
  const pathLink = imgLink + `${product.productImages[4].url}`;

  return (
    <div className={s.popup}>
      <div className={s.body}>
        <div className={s.content}>
          <div
            className={s.close}
            onClick={() => {
              onClick("");
            }}
          >
            X
          </div>
          <div className={s.picture}>
            <img className={s.img} src={pathLink} />
          </div>
          <div className={s.info}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <button className={s.button}>
              Добавить в корзину за {price.value}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
