import Layout from "./Layout";
import { useParams} from "react-router-dom";
import { matchList } from "../profileInfo";
import MiniMatchCardSection from "./MiniMatchCardSection";
import Event from "./Event";

export default function MatchPage(){
    const { id } = useParams();
    //to "change" the page if user types valid name in search bar and clicks button/enter
    // const navigate = useNavigate(); 

    //for search bar function:
    // const [searchEntry, setSearchEntry] = useState("");
    // const [failed, setFailed]= useState(false);

    const foundMatch = matchList.find(match=> match.id === id);
    if (!foundMatch){
        return <Layout>Failed</Layout>;
    }


    return (
        <Layout>
            <div className="home-content" id="match-page-content">
                <MiniMatchCardSection {...foundMatch} />
                {foundMatch && (<div className="match-title">
                    <h2>Upcoming Events</h2>
                </div>)}
                {foundMatch.eventList.map((item)=>(
                    <Event {...item}/>
                ))}
                
            </div>
        </Layout>
    );
}