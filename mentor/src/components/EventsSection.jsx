import MentorEvent from "./MentorEvent";
import { eventsOnlyArray } from "../profileInfo";
export default function EventSection(){
    return (
        <div className="events-container">
            {eventsOnlyArray.map((myevent)=>(
                <MentorEvent {...myevent} />
            ))}
        </div>
    );
}