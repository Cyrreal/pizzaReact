import { OtherCards } from "../Cards";
export function Deserts({ desserts }) {
  return (
    <div className="product-block">
      <h2 className="menu-title">Десерты</h2>
      <div className="grid-menu">
        {desserts.splice(0, 5).map((elem) => {
          return <OtherCards {...elem} key={elem.name} />;
        })}
      </div>
    </div>
  );
}
