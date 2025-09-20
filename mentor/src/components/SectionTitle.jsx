export default function SectionTitle({text, id=null}){
    return (
        <div className="section-title" id={id? id: ""}>
            <h2>{text}</h2>
        </div>
    );
}