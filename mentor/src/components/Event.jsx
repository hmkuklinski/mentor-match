/* for the appearance of the different events in calendar form!!*/

import { Link } from "react-router-dom";
export default function Event(props){
    return (
        <div className="event-container-cal">
            <div className="event-left">
                <div className="event-day">
                    {props.startDate}
                </div>
                <div className="event-month">
                    {props.startMonth}
                </div>
            </div>
            <div className="event-right">
                <div className="event-location">
                    {props.eventLocation}
                </div>
                <div className="event-host-site">
                    {props.eventTime}
                </div>
                <div className="event-lorem">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, assumenda consequatur debitis consectetur nobis rerum esse dolor voluptates eos provident eveniet temporibus reprehenderit culpa ipsum saepe, deserunt repellat veritatis omnis!</p>
                </div>
                <Link to={`/events/${props.eventId}`} >
                        <div className="event-button">Get Directions
                    </div>
                    </Link>
            </div>
        </div>
    );
}