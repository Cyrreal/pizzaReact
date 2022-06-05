import "./App.css";
import Loader from "./DgiN.gif";
import { Header } from "./Components/Header/Header";
import { Main, Navigation } from "./Components/MainComps";
import { useEffect, useState } from "react";
import { Footer } from "./Components/Footer";
import { Popup, PopupOther } from "./Components/Popup";

export function App() {
  const [thisPizza, setThisPizza] = useState("");
  const [otherEats, setOtherEats] = useState();
  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("https://pizza.ymatuhin.workers.dev/")
      .then((response) => response.json())
      .then((data) => {
        setDishes(data.menu);
        setLoading(false);
      });
  }, []);

  const { pizzas, snacks, desserts, drinks } = dishes as any;

  return (
    <>
      <Header />
      <Navigation />
      {loading === false ? (
        <Main
          pizzas={pizzas}
          onPizzaClick={setThisPizza}
          onOtherClick={setOtherEats}
          snacks={snacks}
          desserts={desserts}
          drinks={drinks}
        />
      ) : (
        <div className="loader">
          <img src={Loader} />
        </div>
      )}
      <Footer />
      {thisPizza && <Popup onClick={setThisPizza} pizzas={thisPizza} />}
      {otherEats && <PopupOther onClick={setOtherEats} eats={otherEats} />}
    </>
  );
}

export default App;
