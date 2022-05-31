import "./App.css";
import { Header } from "./Components/Header/Header";
import { Main, Navigation } from "./Components/MainComps";
import { useEffect, useState } from "react";
import { Footer } from "./Components/Footer";
import { Popup } from "./Components/Popup";

export function App() {
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
      {/* <Header />
      <Navigation />
      {loading === false ? (
        <Main
          pizzas={pizzas}
          snacks={snacks}
          desserts={desserts}
          drinks={drinks}
        />
      ) : (
        <div>Lodaing</div>
      )}
      <Footer /> */}
      <Popup />
    </>
  );
}

export default App;
