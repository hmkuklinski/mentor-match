import {Link} from "react-router-dom";
import { navbarLinks } from "../navbarInfo";

export default function Sidebar(props){
    return (
        <div className="sidebar-main-container">
            <div className="sidebar-profile">
                <div className="sidebar-img">
                    <img src={props.sidebarImg} alt="profile-pic"/>
                </div>
                <div className="sidebar-title">
                    <h3>{props.username}</h3>
                    <h4><i>{props.collegeName}</i></h4>
                </div>
            </div>
            <div className="sidebar-links">
                <ul className="sidebar-link-ul">
                    {navbarLinks.map((navbarItem)=>(
                        <li>
                            <Link to={navbarItem.mylink}>
                                <><img src={navbarItem.imgsrc} alt={navbarItem.id} /></>
                                <><h4>{navbarItem.text}</h4></>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}