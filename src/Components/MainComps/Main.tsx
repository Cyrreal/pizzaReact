import { Pizza, Deserts, Drinks, Snacks } from "../MenueComps";
export type PropsType = {
  pizzas: any;
  snacks: any;
  desserts: any;
  drinks: any;
};

export function Main({ pizzas, snacks, desserts, drinks }: PropsType) {
  return (
    <div className="container">
      <Pizza pizzas={pizzas} />
      <Snacks snacks={snacks} />
      <Deserts desserts={desserts} />
      <Drinks drinks={drinks} />
    </div>
  );
}
