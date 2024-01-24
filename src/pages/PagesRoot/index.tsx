import pr from "./style.module.scss";
import { Route, Routes } from "react-router-dom";
import { Error, Home, Namoz_vaqti, Oyahs, Surah } from "..";
import { Navbar, Sidebar } from "../../components/Loyout";
import Playr from "../../components/Playr";
import Gear from "../../components/Gear";
import { useState } from "react";

function Pages_root() {
  const [setings, setSetings] = useState<boolean>(false);
  const [leng, setLeng] = useState("ar.muyassar");
  return (
    <div className={pr.pages_root}>
      <div className={pr.navbar}>
        <Navbar setings={setings} setSetings={setSetings} />
      </div>
      <div className={setings ? pr.gear_option : pr.gear}>
        <Gear
          setings={setings}
          setSetings={setSetings}
          leng={leng}
          setLeng={setLeng}
        />
      </div>

      <div className={pr.show}>
        <div className={pr.sidebar}>
          <Sidebar />
        </div>
        <div className={pr.route_play}>
          <div className={pr.route}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/surah" element={<Surah />} />
              <Route path="/namoz_vaqti" element={<Namoz_vaqti />} />
              <Route
                path="/surah/oyahs/:numder"
                element={<Oyahs leng={leng} setLeng={setLeng} />}
              />
              <Route path="*" element={<Error />} />
            </Routes>
          </div>
          <div className={pr.play}>
            <Playr />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Pages_root;
