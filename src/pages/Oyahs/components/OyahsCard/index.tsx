import oc from "./style.module.scss";
type OyahsCardprops = {
  numberInSurah: number;
  text: string;
};
function OyahsCard(props: OyahsCardprops) {
  const { numberInSurah, text } = props;
  return (
    <div className={oc.card}>
      <h2>{numberInSurah}</h2>
      <h3>{text}</h3>
    </div>
  );
}

export default OyahsCard;
