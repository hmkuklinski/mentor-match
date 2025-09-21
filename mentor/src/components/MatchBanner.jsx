import {Link} from "react-router-dom";
import {matchList} from '../profileInfo';

/*generates the photo image banner at the top*/
export default function MatchBanner(){
    return (
        <div className="match-banner-container" >
            {matchList.map((profile)=>(
                <Link to={`/my-mentors/${profile.id}`} >
                    <div className="individual-match-banner"key={profile.id}>
                        <img src={profile.imgsrc} alt={profile.id} />
                    </div>
                </Link>
            ))}
        </div>
    );
}