import { Pizza, Deserts, Drinks, Snacks } from "../MenueComps";
// import { Props } from "../../App";
export type PropsType = {
  pizzas: any;
  snacks: any;
  desserts: any;
  drinks: any;
  onOtherClick: (arg: any) => void;
  onPizzaClick: (arg: any) => void;
};

export function Main({
  pizzas,
  snacks,
  desserts,
  drinks,
  onPizzaClick,
  onOtherClick,
}: PropsType) {
  return (
    <div className="container">
      <Pizza data={pizzas} onClick={onPizzaClick} />
      <Snacks data={snacks} onClick={onOtherClick} />
      <Deserts data={desserts} onClick={onOtherClick} />
      <Drinks data={drinks} onClick={onOtherClick} />
    </div>
  );
}
