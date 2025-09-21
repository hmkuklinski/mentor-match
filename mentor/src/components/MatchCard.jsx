import { Link } from "react-router-dom";
/* this one shows up on the My Mentors page --> each mentor you like gets a card (all display at once) */
export default function MatchCard(props){
    return (
        <Link to={`/my-mentors/${props.id}`} >
        <div className="match-info-container">
            <div className="matched-img">
                <img src={props.imgsrc} alt={props.id} />
            </div>
            <div className="matched-right">
                <div className="matched-name">
                    <h2>{props.name}</h2>
                </div>
                <div className="matched-position">
                    <h4><i><b>{props.title}</b> | {props.company}</i></h4>
                </div>
                <div className="matched-description">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis hic repellat eius vero recusandae sequi minima dolorum temporibus alias, sunt, obcaecati consequuntur nihil? Non culpa ad, nisi animi deserunt sint.</p>
                </div>
                <div className="matched-contact">
                    <div className="chat">
                        <img src="/assets/icons/messages.png" alt="icon" />
                    </div>
                    <div className="phone">
                        <img src="/assets/icons/phone-call.png" alt="icon" />
                    </div>
                    <div className="email">
                        <img src="/assets/icons/envelope.png" alt="icon" />
                    </div>
                </div>
            </div>
        </div>
        </Link>
    );
}