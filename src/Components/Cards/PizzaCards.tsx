type PropsType = {
  pizzas: any;
};

export function PizzaCards({ pizzas }: PropsType) {
  const { description, name, products } = pizzas;
  console.log(pizzas);
  const price = products[0].menuProduct.price.value;
  const image = products[0].menuProduct.product.productImages[5].url;
  const imgLink =
    "https://raw.githubusercontent.com/Saint-Code-Bootcamp/pizza-house/main/images/" +
    `${image}`;

  return (
    <div className="grid-item">
      <div>
        <img src={imgLink} className="image" />
      </div>
      <p className="card-title">{name}</p>
      <p className="card-description">{description}</p>
      <div className="price-flex">
        <p className="price">{price}P</p>
        <button className="btn-price">Выбрать</button>
      </div>
    </div>
  );
}

// , snacks, desserts, drinks
