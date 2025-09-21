import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import { myProfile } from "../profileInfo";

export default function Layout(props){
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
        <div className="layout-container">
            {/* NavBar on top of every page*/}
            {isMobile ? <h2></h2> : <Sidebar {...myProfile} />}

            {/* The contents of the page itself */}
            {props.children}

            {/* Footer on every page if I decide to... */}
        </div>
    )
}