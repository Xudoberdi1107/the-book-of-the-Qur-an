import { Link } from "react-router-dom";
import "./style.scss"
import Search from "../../Search";
function Navbar() {
    return(
        <nav className="navbar">
            <div className="logo_search">

            <div className="box_logo">
            <Link to={"/"}>
                <i className="fa-solid fa-book-quran"></i>
            </Link>
            </div>
            <div className="search">
                <Search/>
            </div>
            </div>

            <div className="gear">
                <Link to={"/gear"}><i className="fa-solid fa-gear link"></i></Link>
                
            </div>
        </nav>
    )
    
}
export default Navbar;