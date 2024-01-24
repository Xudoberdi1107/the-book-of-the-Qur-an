import React from "react";
import l from "./style.module.scss";
const Loading: React.FC = () => {
  return (
    <div className={l.spinner}>
      <div className={l.spinner}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
