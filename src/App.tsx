import "./App.css";
import { Header } from "./Components/Header/Header";
import { Main, Navigation } from "./Components/MainComps";
import { useEffect, useState } from "react";
import { Footer } from "./Components/Footer";
import { Popup, PopupOther } from "./Components/Popup";

// export type Props = {
//   setThisPizza: ()=>void
//   pizzas:any
// };

export function App() {
  const [thisPizza, setThisPizza] = useState();
  const [otherEats, setOtherEats] = useState();
  console.log(otherEats);
  // const [isPopupVisible, setPopupVisible] = useState(false);
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
  console.log(snacks);
  return (
    <>
      <Header />
      <Navigation />
      {loading === false ? (
        <Main
          pizzas={pizzas}
          // isPopupVisible={isPopupVisible}
          // setPopupVisible={setPopupVisible}
          setThisPizza={setThisPizza}
          snacks={snacks}
          desserts={desserts}
          drinks={drinks}
          setOtherEats={setOtherEats}
        />
      ) : (
        <div>Lodaing</div>
      )}
      <Footer />
      {thisPizza && <Popup setThisPizza={setThisPizza} pizzas={thisPizza} />}
      {otherEats && <PopupOther setOtherEats={setOtherEats} eats={otherEats} />}
    </>
  );
}

export default App;
