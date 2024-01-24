import s from "./style.module.scss";
type searchProps = {
  setSearch: any;
};
function Search(props: searchProps) {
  const { setSearch } = props;
  return (
    <div className={s.search}>
      <input
        type="search"
        className={s.input_search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default Search;
