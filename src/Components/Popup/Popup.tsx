import { useState } from "react";
import s from "./Popup.module.css";
import chicken from "../../img/image8.svg";
export function Popup() {
  const [size, setSize] = useState("medium");
  const [thiknes, setThiknes] = useState("traditional");

  return (
    <div className={s.popup}>
      <div className={s.body}>
        <div className={s.content}>
          <div className={s.pizza}>
            <div className={s.background}>
              <img className={s.img} src={chicken} />
            </div>
          </div>
          <div className={s.description}>
            <div>
              <h2 className={s.title}>Чиззи чеддер</h2>
              <p className={s.text}>30 см, траддиционное тесто, 480г</p>
              <div className={s.btnBackground}>
                <p
                  className={`${s.selrctor} ${
                    size === "small" ? s.selected : ""
                  }`}
                  onClick={() => setSize("small")}
                >
                  Маленькая
                </p>
                <p
                  className={`${s.selrctor} ${
                    size === "medium" ? s.selected : ""
                  }`}
                  onClick={() => setSize("medium")}
                >
                  Средняя
                </p>
                <p
                  className={`${s.selrctor} ${
                    size === "large" ? s.selected : ""
                  }`}
                  onClick={() => setSize("large")}
                >
                  Большая
                </p>
              </div>
              <div className={s.btnBackground}>
                <p
                  className={`${s.selrctor2} ${
                    thiknes === "traditional" ? s.selected : ""
                  }`}
                  onClick={() => setThiknes("traditional")}
                >
                  Традиционное
                </p>
                <p
                  className={`${s.selrctor2} ${
                    thiknes === "slim" ? s.selected : ""
                  }`}
                  onClick={() => setThiknes("slim")}
                >
                  Тонкое
                </p>
              </div>
            </div>
            <div className={s.add}>
              <h2 className={s.subtitle}>Добавить в пиццу</h2>
              <div className={s.grid}>
                <div className={s.item}></div>
                <div className={s.item}></div>
                <div className={s.item}></div>
                <div className={s.item}></div>
                <div className={s.item}></div>
                <div className={s.item}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
