import MentorEvent from "./MentorEvent";
import { eventsOnlyArray, extractMember } from "../profileInfo";
import MentorEventLong from "./MentorEventLong";

/* are you on homepage- show all mentor's upcoming events OR did you click a specific person (only showcase their featured events) */
export default function EventSection({member=null}){
    let content = member? (
        <div className="events-container">
            {extractMember(member).map((myevent)=>(
                <MentorEventLong {...myevent} />
            ))}
        </div>
    ):(
        <div className="events-container">
            {eventsOnlyArray.map((myevent)=>(
                <MentorEvent {...myevent} />
            ))}
        </div>
    );

    return content;
}