import {useState, useEffect} from "react";
import Sidebar from "./Sidebar";
import MatchBanner from "./MatchBanner";
import {myProfile} from '../profileInfo.js';
import SectionTitle from "./SectionTitle.jsx";
import EventSection from "./EventsSection.jsx";
import { matchList } from "../profileInfo.js";

export default function Home(){
    const [layoutType, setLayoutType]= useState("desktopLayout");
    const [hasConnections , setHasConnections]= useState(matchList.length>=1);

    const getLayoutType = (size) =>{
        if (size<500){
            setLayoutType("mobileLayout");
        } else if (size <768){
            setLayoutType("tabletLayout");
        }
        else{
            setLayoutType("desktopLayout");
        }
    }

    useEffect(()=>{
        // set layout on mount
        getLayoutType(window.innerWidth);
        setHasConnections(matchList.length>=1);

        // update on resize
        const handleResize = () => getLayoutType(window.innerWidth);
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const desktopConnections = (
        <div className="home-content">
            <SectionTitle text="My Mentors" id="events1" />
            <MatchBanner />
            <SectionTitle text="Featured Events" id="events2"/>
            <EventSection />
        </div>
    );

    const desktopEmpty = (
        <div className="empty-container">
            <div className="empty-title">
                <h1>Connections</h1>
            </div>
            <div className="empty-text">
                <h3>You haven't made any connections yet. Click on the "Find Matches" link to see if you have any matches waiting!</h3>
            </div>
        </div>
    );


    const homeLayout = {
        mobileLayout: (
            <div className="home-mobile">
                <SectionTitle text="My Events" />
                <EventSection />
            </div>
        ),
        tabletLayout: (
            <div className="home-tablet">
                <SectionTitle text="Mentor's Events" id="events1" />
                <EventSection />
            </div>
        ),
        desktopLayout: (
            <div className="home-large-container">
                <Sidebar {...myProfile} />
                {hasConnections? desktopConnections: desktopEmpty}
            </div>
        ),
    }
    return homeLayout[layoutType];
}