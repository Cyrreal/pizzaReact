type PropsType = {
  price: any;
  product: any;
  setOtherEats: (arg: any) => void;
};

export function OtherCards({ price, product, setOtherEats }: PropsType) {
  //   const { price, product } = drinks;
  const cost = price.value;
  const name = product.name;
  const description = product.description;
  const imgLink =
    "https://raw.githubusercontent.com/Saint-Code-Bootcamp/pizza-house/main/images/" +
    `${product.productImages[3].url}`;
  const imgPopup =
    "https://raw.githubusercontent.com/Saint-Code-Bootcamp/pizza-house/main/images/" +
    `${product.productImages[4].url}`;
  return (
    <div className="grid-item">
      <div>
        <img src={imgLink} className="image" />
      </div>
      <p className="card-title">{name}</p>
      <p className="card-description">{description}</p>
      <div className="price-flex">
        <p className="price">{cost}P</p>
        <button
          onClick={() => {
            setOtherEats({ cost, name, imgPopup, description });
          }}
          className="btn-price"
        >
          Выбрать
        </button>
      </div>
    </div>
  );
}
