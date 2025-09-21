import { Link } from "react-router-dom";
/* for the actual page with just the member only!*/ 
export default function MentorEventLong(props){
    return (
        <div className="event-container-long">
            <div className="event-img">
                <img src={props.eventImg} alt={props.eventTitle} />
            </div>
            <div className="event-content-long">
                <div className="event-text">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur impedit minima nesciunt et ipsam optio tenetur blanditiis soluta labore, placeat est magni ab earum reprehenderit. Sequi obcaecati aliquid excepturi labore?</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur impedit minima nesciunt et ipsam optio tenetur blanditiis soluta labore, placeat est magni ab earum reprehenderit. Sequi obcaecati aliquid excepturi labore?</p>
                    <Link to={`/events/${props.eventId}`} >
                        <div className="event-button">Get Directions
                    </div>
                    </Link>
                </div>
            </div>

        </div>
    );
}