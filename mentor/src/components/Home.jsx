import {useState, useEffect} from "react";
import Sidebar from "./Sidebar";
import MatchBanner from "./MatchBanner";
import {myProfile} from '../profileInfo.js';
import SectionTitle from "./SectionTitle.jsx";
import EventSection from "./EventsSection.jsx";

export default function Home(){
    const [layoutType, setLayoutType]= useState("desktopLayout");

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

        // update on resize
        const handleResize = () => getLayoutType(window.innerWidth);
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);


    const homeLayout = {
        mobileLayout: (
            <div className="home-mobile">
                <SectionTitle text="Mentor's Events" />
                <EventSection />
            </div>
        ),
        tabletLayout: (
            <div className="home-tablet">
                <SectionTitle text="My Mentors" />
                <MatchBanner />
                <SectionTitle text="Mentor's Events" id="events1" />
                <EventSection />
            </div>
        ),
        desktopLayout: (
            <div className="home-large-container">
                <Sidebar {...myProfile} />
                <div className="home-content">
                    <SectionTitle text="My Mentors" />
                    <MatchBanner />
                    <SectionTitle text="Mentor's Events" id="events2"/>
                    <EventSection />
                </div>
            </div>
        ),
    }
    return homeLayout[layoutType];
}