import { navbarLinks } from "../navbarInfo";
import { Link } from "react-router-dom";
export default function SwipeBottom(){
    <div className="swipe-bottom-container">
        <ul className="swipe-bottom-ul">
            {navbarLinks.map((elem)=>(
                <Link to={elem.mylink}>
                    <li>
                        <img src={elem.imgsrc} alt={elem.id} />
                        <h4>{elem.id}</h4>
                    </li>
                </Link>
            ))}
        </ul>
    </div>
}