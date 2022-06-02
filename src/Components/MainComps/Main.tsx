import { Pizza, Deserts, Drinks, Snacks } from "../MenueComps";
// import { Props } from "../../App";
export type PropsType = {
  pizzas: any;
  snacks: any;
  desserts: any;
  drinks: any;
  setThisPizza: (arg: any) => void;
  setOtherEats: (arg: any) => void;
};

export function Main({
  pizzas,
  snacks,
  desserts,
  drinks,
  setThisPizza,
  setOtherEats,
}: PropsType) {
  return (
    <div className="container">
      <Pizza pizzas={pizzas} setThisPizza={setThisPizza} />
      <Snacks snacks={snacks} setOtherEats={setOtherEats} />
      <Deserts desserts={desserts} setOtherEats={setOtherEats} />
      <Drinks drinks={drinks} setOtherEats={setOtherEats} />
    </div>
  );
}
