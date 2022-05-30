import { OtherCards } from "../Cards";
type PropsType = {
  pizzas: any;
  snacks: any;
  desserts: any;
  drinks: any;
};
export function Snacks({ snacks }) {
  return (
    <div className="product-block">
      <h2 className="menu-title">Закуски</h2>
      <div className="grid-menu">
        {snacks.splice(0, 5).map((elem) => {
          return <OtherCards {...elem} key={elem.name} />;
        })}
      </div>
    </div>
  );
}
