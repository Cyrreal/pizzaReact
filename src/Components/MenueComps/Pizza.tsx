import { PizzaCards } from "../Cards";

type Props = {
  pizzas: any;
  setThisPizza: (arg: any) => void;
};
export function Pizza({ pizzas, setThisPizza }: Props) {
  return (
    <div className="product-block">
      <h2 className="menu-title">Пицца</h2>
      <div className="grid-menu">
        {pizzas.map((elem) => {
          return (
            <PizzaCards
              setThisPizza={setThisPizza}
              pizzas={elem}
              key={elem.name}
            />
          );
        })}
      </div>
    </div>
  );
}
