import { useEffect, useState } from "react";
import g from "./style.module.scss";
type navbarProps = {
  setings: boolean;
  setSetings: any;
  leng: string;
  setLeng: any;
};
function Gear(props: navbarProps) {
  const { setSetings, setings, leng, setLeng } = props;
  const [lengOp, setLengOp] = useState("AR");

  function onHendle(params: string) {
    setLeng(params);
  }

  useEffect(() => {
    if (leng === "uz.sodik") {
      setLengOp("UZ");
    }
    if (leng === "en.ahmedali") {
      setLengOp("EN");
    }
    if (leng === "ru.kuliev") {
      setLengOp("RU");
    }
    if (leng === "ar.muyassar") {
      setLengOp("AR");
    }
  }, [leng]);

  return (
    <div className={g.gear_box}>
      <div className={g.gear}>
        <div className={g.header}>
          <h1>Setings</h1>
          <button onClick={() => setSetings(!setings)}>X</button>
        </div>
        <div className={g.setings}>
          <select
            className={g.select}
            defaultValue={lengOp}
            onChange={(e) => onHendle(e.target.value)}
          >
            <option value="ar.muyassar">AR</option>
            <option value="uz.sodik">UZ</option>
            <option value="en.ahmedali">EN</option>
            <option value="ru.kuliev">RU</option>
          </select>
        </div>
      </div>
      <div className={g.close} onClick={() => setSetings(!setings)}></div>
    </div>
  );
}
export default Gear;
