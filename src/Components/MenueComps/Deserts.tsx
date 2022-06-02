import { OtherCards } from "../Cards";
export function Deserts({ desserts, setOtherEats }) {
  return (
    <div className="product-block">
      <h2 className="menu-title">Десерты</h2>
      <div className="grid-menu">
        {desserts.map((elem) => {
          return (
            <OtherCards {...elem} setOtherEats={setOtherEats} key={elem.name} />
          );
        })}
      </div>
    </div>
  );
}
