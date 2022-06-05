import { Card } from "../Cards";

type Props = {
  data: any;
  onClick: (arg: any) => void;
};
export function Pizza({ data, onClick }: Props) {
  return (
    <div className="product-block">
      <h2 className="menu-title">Пицца</h2>
      <div className="grid-menu">
        {data.map((elem) => {
          return (
            <Card
              name={elem.name}
              description={elem.description}
              imgLink={
                "https://raw.githubusercontent.com/Saint-Code-Bootcamp/pizza-house/main/images/" +
                `${elem.products[0].menuProduct.product.productImages[5].url}`
              }
              price={elem.products[0].menuProduct.price.value}
              key={elem.name}
              onClick={onClick}
              data={elem}
            />
          );
        })}
      </div>
    </div>
  );
}
