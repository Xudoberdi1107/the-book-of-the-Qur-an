import { useParams } from "react-router-dom";
import oy from "./style.module.scss";
import { useGetData } from "../../Hooks";
import OyahsCard from "./components/OyahsCard";
import Loading from "../../components/Loading/Loading";
import { useEffect } from "react";
type navbarProps = {
  leng: string;
  setLeng: any;
};
function Oyahs(props: navbarProps) {
  const { leng } = props;
  const { numder } = useParams();

  let { data, isLoading, refetch } = useGetData(
    ["oyahs"],
    `/surah/${numder}/${leng}`,
    {}
  );
  useEffect(() => {
    refetch();
  }, [leng]);

  const myData = data?.data?.data;

  if (isLoading) return <Loading />;

  return (
    <div className={oy.oyahs}>
      <div className={oy.header}>
        <div className={oy.header_name}>
          <h2>{myData?.englishName}</h2>
          <h3>{myData.name}</h3>
        </div>
        <div className={oy.header_number}>
          <h3>Surah: {myData?.number}</h3>
          <h3 className={oy.h31}>Oyatlar: {myData?.numberOfAyahs}</h3>
        </div>
      </div>
      <div className={oy.body}>
        {myData?.ayahs?.map((e: any, i: number) => {
          return (
            <OyahsCard
              key={i}
              numberInSurah={e.numberInSurah}
              text={e.text}
              textAlign={
                myData?.edition?.identifier === "ar.muyassar" ? "end" : "start"
              }
            />
          );
        })}
      </div>
    </div>
  );
}
export default Oyahs;
