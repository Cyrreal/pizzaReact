import { OtherCards } from "../Cards";
type PropsType = {
  pizzas: any;
  snacks: any;
  desserts: any;
  drinks: any;
  setOtherEats: (arg: any) => void;
};
export function Drinks({ drinks, setOtherEats }) {
  return (
    <div className="product-block">
      <h2 className="menu-title">Напитки</h2>
      <div className="grid-menu">
        {drinks.map((elem) => {
          return (
            <OtherCards {...elem} setOtherEats={setOtherEats} key={elem.name} />
          );
        })}
      </div>
    </div>
  );
}
