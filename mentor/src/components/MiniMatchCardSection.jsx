export default function MiniMatchCardSection(props){
     return (
        <div className="match-info-container">
            <div className="matched-img">
                <img src={props.imgsrc} alt={props.id} />
            </div>
            <div className="matched-right">
                <div className="matched-name">
                    <h1>{props.name}</h1>
                </div>
                <div className="matched-position">
                    <h4><i><b>{props.title}</b> | {props.company}</i></h4>
                </div>
                <div className="matched-description">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis hic repellat eius vero recusandae sequi minima dolorum temporibus alias, sunt, obcaecati consequuntur nihil? Non culpa ad, nisi animi deserunt sint.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis hic repellat eius vero recusandae sequi minima dolorum temporibus alias, sunt, obcaecati consequuntur nihil? Non culpa ad, nisi animi deserunt sint.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis hic repellat eius vero recusandae sequi minima dolorum temporibus alias, sunt, obcaecati consequuntur nihil? Non culpa ad, nisi animi deserunt sint.</p>
                </div>
            </div>
        </div>
    );
}