import { useParams } from "react-router-dom";
import oy from "./style.module.scss";
import { useGetData } from "../../Hooks";

function Oyahs() {
  const { numder } = useParams();
  const { data, isLoading } = useGetData(["oyahs"], `/surah/${numder}`, {});
  const myData = data?.data?.data;
  console.log(myData);

  if (isLoading) {
    return <h1>Loding...</h1>;
  }
  return (
    <div className={oy.oyahs}>
      <div className={oy.header}>
        <h1>{myData.englishName}</h1>
      </div>
    </div>
  );
}
export default Oyahs;
