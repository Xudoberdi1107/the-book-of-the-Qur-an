import pr from "./style.module.scss";
import { Route, Routes } from "react-router-dom";
import { Error, Gear, Home, Namoz_vaqti, Oyahs, Surah } from "..";
import { Navbar, Sidebar } from "../../components/Loyout";
import { Playr } from "../../components";
// import Example from "../../Hooks";

function Pages_root() {
  return (
    <div className={pr.pages_root}>
      <div className={pr.navbar}>
        <Navbar />
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
              <Route path="/gear" element={<Gear />} />
              <Route path="/namoz_vaqti" element={<Namoz_vaqti />} />
              <Route path="/surah/oyahs/:numder" element={<Oyahs />} />
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
