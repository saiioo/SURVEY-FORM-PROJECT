import { FaBookOpen } from "react-icons/fa";
import ThemeDropDown from "../ThemesDropDownMenu/themeDropDown"
import "./navbar.css"

const Navbar = ()=>{

    return(
        <nav className="nav-container">
            <div className="nav-logo">
                <FaBookOpen color="red" size="50px"/>
                
            </div>
            <div  className="userInfo">
            <div className="userImage"></div>
                <p>Pavan jadhav</p>
            </div>
                <ThemeDropDown/>
        </nav>
    )
}
export default Navbar;

