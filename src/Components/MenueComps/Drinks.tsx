import { Card } from "../Cards";
type PropsType = {
  pizzas: any;
  snacks: any;
  desserts: any;
  drinks: any;
  onClick: (arg: any) => void;
};
export function Drinks({ data, onClick }) {
  return (
    <div className="product-block">
      <h2 className="menu-title">Напитки</h2>
      <div className="grid-menu">
        {data.map((elem) => {
          return (
            <Card
              data={elem}
              name={elem.product.name}
              description={elem.product.description}
              imgLink={
                "https://raw.githubusercontent.com/Saint-Code-Bootcamp/pizza-house/main/images/" +
                `${elem.product.productImages[3].url}`
              }
              price={elem.price.value}
              key={elem.name}
              onClick={onClick}
            />
          );
        })}
      </div>
    </div>
  );
}
