const Card = (props) => {
    return (
        <div className="card">
            <div className="card__img__holder"
                style={{ backgroundColor: props.backgroundColor }}>
                <img
                    className="card__img"
                    src={props.src}
                    alt=""
                />
            </div>
            <div className="card__details">
                <div className="duration">
                    <span className="duration__hrs">{props.duration}</span>
                    <span className="span__contract">{props.contract}</span>
                </div>
                <h2 className="card__title">{props.position}</h2>
                <p className="company__name">{props.company}</p>
            </div>
            <a className="card--link" href="/">{props.location}</a>
        </div>
    )
}
export default Card