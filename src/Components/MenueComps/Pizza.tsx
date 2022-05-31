import { PizzaCards } from "../Cards";

type Props = {
  pizzas: any;
};
export function Pizza({ pizzas }) {
  return (
    <div className="product-block">
      <h2 className="menu-title">Пицца</h2>
      <div className="grid-menu">
        {pizzas.splice(0, 8).map((elem) => {
          return <PizzaCards pizzas={elem} key={elem.name} />;
        })}
      </div>
    </div>
  );
}
