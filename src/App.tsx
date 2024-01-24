import { createContext, useState } from "react";
import "./App.css";
import { Pages_root } from "./pages";

const LenguageContext = createContext<any>(localStorage.getItem("lenguage"));
function App() {
  const [leng, setLeng] = useState(localStorage.getItem("lenguage"));
  const lengGetSet = {
    leng,
    setLeng,
  };

  return (
    <LenguageContext.Provider value={lengGetSet}>
      <Pages_root />
    </LenguageContext.Provider>
  );
}

export { App, LenguageContext };
