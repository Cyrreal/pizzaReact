export function Card({ name, imgLink, description, onClick, price, data }) {
  return (
    <div className="grid-item">
      <div>
        <img src={imgLink} className="image" />
      </div>
      <p className="card-title">{name}</p>
      <p className="card-description">{description}</p>
      <div className="price-flex">
        <p className="price">{price}P</p>
        <button
          onClick={() => {
            onClick(data);
          }}
          className="btn-price"
        >
          Выбрать
        </button>
      </div>
    </div>
  );
}
