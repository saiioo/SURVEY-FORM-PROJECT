import { FaHome, FaList } from "react-icons/fa";
import {AiOutlineUserAdd} from "react-icons/ai"
import "./sidebar.css"
const SideBar = ()=>{

    const menu = [
        {
            path:"/signIn",
            name:"Home",
            icon:<FaHome size="20px"/>
        },
        {
            path:"/createSurvey",
            name:"surveyList",
            icon:<AiOutlineUserAdd size="20px"/>
        },
        {
            path:"/surveyList",
            name:"surveyList",
            icon:<FaList size="20px"/>
        }
    ]
    return(
        <aside className="sidebar-container">
            {menu.map((ele,i)=>{
                return(
                    <div key={i} className="sidebar-element">
                        {ele.icon}
                    </div>
                )
            })}
        </aside>
    )
}
export default SideBar;