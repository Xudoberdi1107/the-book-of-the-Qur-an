import { useGetData } from "../../Hooks";
import Loading from "../../components/Loading/Loading";
import Search from "../../components/Search";
import SurahCard from "../../components/SurahCard";
import type_bir from "../../types";
import s from "./style.module.scss";
type SurahProps = {
  search: string;
  setSearch: any;
};
function Surah(props: SurahProps) {
  const { search, setSearch } = props;
  const { data, isLoading } = useGetData(["surah"], "/surah", {});
  let myData = data?.data?.data;

  if (isLoading) {
    return <Loading />;
  }

  if (Array.isArray(myData)) {
    return (
      <div className={s.surah_box}>
        <Search setSearch={setSearch} />
        <div className={s.surah}>
          {myData
            ?.filter((element, _) => {
              if (search === "") return element;
              else if (
                element?.englishName
                  ?.toLowerCase()
                  .includes(search.toLowerCase())
              )
                return element;
            })
            ?.map((e: type_bir) => {
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
      </div>
    );
  }
}

export default Surah;
