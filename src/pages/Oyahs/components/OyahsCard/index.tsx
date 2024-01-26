import oc from "./style.module.scss";
type OyahsCardprops = {
  numberInSurah: number;
  text: string;
  textAlign: string;
};
function OyahsCard(props: OyahsCardprops) {
  const { numberInSurah, text, textAlign } = props;
  return (
    <div className={oc.card}>
      <div className={oc.text}>
        <h2>{numberInSurah}</h2>
        <h3 className={oc[textAlign]}>{text}</h3>
      </div>
      <span></span>
    </div>
  );
}

export default OyahsCard;
