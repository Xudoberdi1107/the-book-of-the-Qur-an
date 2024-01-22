import { useParams } from "react-router-dom";
import { useGetData } from "../../Hooks";
import SurahCard from "../../components/SurahCard";
import type_bir from "../../types";
import s from "./style.module.scss";

function Surah() {
  const { data, isLoading } = useGetData(["surah"], "/surah", {});
  let myData = data?.data?.data;

  if (isLoading) {
    return <h1>loding...</h1>;
  }

  if (Array.isArray(myData)) {
    return (
      <div className={s.surah}>
        {myData.map((e: type_bir) => {
          return (
            <SurahCard
              key={e.number}
              number={e.number}
              englishName={e.englishName}
              name={e.name}
              numberOfAyahs={e.numberOfAyahs}
              url={`/surah/oyahs/${e.number}`}
            />
          );
        })}
      </div>
    );
  }
}

export default Surah;
