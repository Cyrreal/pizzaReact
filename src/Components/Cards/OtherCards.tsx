type PropsType = {
  price: any;
  product: any;
};

export function OtherCards({ price, product }: PropsType) {
  //   const { price, product } = drinks;
  const imgLink =
    "https://raw.githubusercontent.com/Saint-Code-Bootcamp/pizza-house/main/images/" +
    `${product.productImages[3].url}`;
  console.log(imgLink);
  return (
    <div className="grid-item">
      <div>
        <img src={imgLink} className="image" />
      </div>
      <p className="card-title">{product.name}</p>
      <p className="card-description">{product.description}</p>
      <div className="price-flex">
        <p className="price">{price.value}P</p>
        <button className="btn-price">Выбрать</button>
      </div>
    </div>
  );
}
