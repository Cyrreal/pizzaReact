import { OtherCards } from "../Cards";
type PropsType = {
  pizzas: any;
  snacks: any;
  desserts: any;
  drinks: any;
  setOtherEats: (arg: any) => void;
};
export function Snacks({ snacks, setOtherEats }) {
  return (
    <div className="product-block">
      <h2 className="menu-title">Закуски</h2>
      <div className="grid-menu">
        {snacks.map((elem) => {
          return (
            <OtherCards {...elem} key={elem.name} setOtherEats={setOtherEats} />
          );
        })}
      </div>
    </div>
  );
}
