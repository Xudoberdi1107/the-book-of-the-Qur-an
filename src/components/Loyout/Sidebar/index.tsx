import { Link } from "react-router-dom"
import si from "./style.module.scss"
import {FaHome, FaBookOpen , FaClock} from "react-icons/fa"
function Sidebar() {
    return(
        <div className={si.sidebar}>
            <Link to={"/"} ><FaHome/></Link>
            <Link to={"/surah"} ><FaBookOpen/></Link>
            <Link to={"/namoz_vaqti"} ><FaClock/></Link>
        </div>
    )
    
}
export default Sidebar