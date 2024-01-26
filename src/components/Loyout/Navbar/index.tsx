import { Link } from "react-router-dom";
import "./style.scss";
import Search from "../../Search";
type navbarProps = {
  setings: boolean;
  setSetings: any;
  setSearch: any;
};
function Navbar(props: navbarProps) {
  const { setSetings, setings, setSearch } = props;
  return (
    <nav className="navbar">
      <div className="logo_search">
        <div className="box_logo">
          <Link to={"/"}>
            <i className="fa-solid fa-book-quran"></i>
          </Link>
        </div>
        <div className="search">{/* <Search setSearch={setSearch} /> */}</div>
      </div>

      <div className="gear">
        <button className="gear_button" onClick={() => setSetings(!setings)}>
          <i className="fa-solid fa-gear link"></i>
        </button>
      </div>
    </nav>
  );
}
export default Navbar;
