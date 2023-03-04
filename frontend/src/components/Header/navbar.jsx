import { FaBookOpen } from "react-icons/fa";
import ThemeDropDown from "../ThemesDropDownMenu/themeDropDown"
import "./navbar.css"
import Logout from "./Logout";
import localname from "./localename";
const Navbar = ()=>{

    return(
        <nav className="nav-container">
            <div className="nav-logo">
                <FaBookOpen color="red" size="50px"/>
            </div>
            <div  className="userInfo">
            {/* <div className="userImage"></div> */}
                <p className="username"><b>{localname()}</b></p>
            </div>
            <span className="Logout"><Logout/></span>
                <ThemeDropDown/>
        </nav>
    )
}
export default Navbar;

