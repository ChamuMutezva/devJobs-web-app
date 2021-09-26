import { Link } from 'react-router-dom'

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
                <Link className="card--link"
                    to={`/ListPage/:${props.id}`}
                    onClick={props.linkClicked}>
                    <h2 className="card__title">{props.position}</h2>
                </Link>
                <p className="company__name">{props.company}</p>
            </div>

            <p className="card--location">{props.location}</p>

        </div>
    )
}
export default Card