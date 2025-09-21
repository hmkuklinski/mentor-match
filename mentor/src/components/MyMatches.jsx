import Layout from './Layout';
import { matchList } from '../profileInfo';
import MatchCard from './MatchCard';
export default function MyMatches(){
    return (
        <Layout>
            <div className="my-matches-container">
                {matchList.map((match)=>(
                    <MatchCard {...match} />
                ))}
            </div>
        </Layout>
    );
}