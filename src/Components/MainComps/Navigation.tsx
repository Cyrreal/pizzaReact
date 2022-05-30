export function Navigation() {
  return (
    <div className="container">
      <nav className="navigation-container">
        <ul className="navigation-flex">
          <li className="link">Закуски</li>
          <li className="link">Десерты</li>
          <li className="link">Напитки</li>
          <li className="link">Другие товары</li>
          <li className="link">Пицца</li>
        </ul>
        <div>
          <button className="btn">Корзина</button>
        </div>
      </nav>
    </div>
  );
}
