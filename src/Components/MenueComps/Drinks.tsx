import { OtherCards } from "../Cards";
type PropsType = {
  pizzas: any;
  snacks: any;
  desserts: any;
  drinks: any;
};
export function Drinks({ drinks }) {
  return (
    <div className="product-block">
      <h2 className="menu-title">Напитки</h2>
      <div className="grid-menu">
        {drinks.splice(0, 5).map((elem) => {
          return <OtherCards {...elem} key={elem.name} />;
        })}
      </div>
    </div>
  );
}
