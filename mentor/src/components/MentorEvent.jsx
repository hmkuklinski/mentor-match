import SectionTitle from "./SectionTitle";
import {Link} from "react-router-dom";

export default function MentorEvent(props){
    return (
        <div className="event-container">
            <SectionTitle text={props.eventTitle} id="event-titles" />
            <div className="event-mentor">
                <p><i>{props.mentorName} ({props.company})</i></p>
            </div>
            <div className="event-content">
                <div className="event-img">
                    <img src={props.eventImg} alt={props.eventTitle} />
                </div>
                <div className="event-text">
                    <p>{props.eventText}</p>
                    <Link to={`/events/${props.eventId}`} >
                        <div className="event-button">Learn More {`>`}
                    </div>
                    </Link>
                </div>
            </div>

        </div>
    );
}