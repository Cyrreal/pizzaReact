import s from "./Popup.module.css";
type Props = {
  setOtherEats: (arg: any) => void;
  eats: any;
};

export function PopupOther({ setOtherEats, eats }: Props) {
  // console.log(setOtherEats);
  console.log(eats);
  const { cost, name, imgPopup, description } = eats;
  // console.log(cost, name, imgLink);

  return (
    <div className={s.popup}>
      <div className={`${s.content} ${s.container}`}>
        <div className="OtherPopUp">
          <img className={s.img} src={imgPopup} />
        </div>
        <div className={s.info}>
          <h2>{name}</h2>
          <p>{description}</p>
          <button>{cost}</button>
        </div>
      </div>
    </div>
  );
}
