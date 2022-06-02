import { Popup } from "../Popup";

type PropsType = {
  pizzas: any;
  setThisPizza: (arg: any) => void;
};

export function PizzaCards({ pizzas, setThisPizza }: PropsType) {
  const { description, name, products, productTopings } = pizzas;
  const price = products[0].menuProduct.price.value;
  const image = products[0].menuProduct.product.productImages[5].url;
  const imgLink =
    "https://raw.githubusercontent.com/Saint-Code-Bootcamp/pizza-house/main/images/" +
    `${image}`;

  return (
    <div className="grid-item">
      <img src={imgLink} className="image" />
      <p className="card-title">{name}</p>
      <p className="card-description">{description}</p>
      <div className="price-flex">
        <p className="price">{price}P</p>
        <button
          className="btn-price"
          onClick={() => {
            setThisPizza(pizzas);
          }}
        >
          Выбрать
        </button>
      </div>
    </div>
  );
}

// , snacks, desserts, drinks
