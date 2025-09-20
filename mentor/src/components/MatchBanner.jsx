import {Link} from "react-router-dom";
import {matchList} from '../profileInfo';

export default function MatchBanner(){
    return (
        <div className="match-banner-container" >
            {matchList.map((profile)=>(
                <Link to={`/mentor-profile/${profile.id}`} >
                    <div className="individual-match-banner"key={profile.id}>
                        <img src={profile.imgsrc} alt={profile.id} />
                    </div>
                </Link>
            ))}
        </div>
    );
}