
export default function Card({title, timeframes, }){

    const cardClass = `card ${title}`;

    return (
        <div className={cardClass}>
            <div className="info">
                <div>
                    <span className="title">{title}</span>
                </div>
                <div className="infoTime">
                    <h3>{}</h3>
                </div>
            </div>
        </div>
    )
}