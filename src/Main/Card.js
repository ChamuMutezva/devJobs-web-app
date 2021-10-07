import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Tippy from '@tippy.js/react'
import 'tippy.js/dist/tippy.css'


const Card = (props) => {

    useEffect(() => {
        // console.log(ScrollTrigger)
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(".card__img__holder", {
            scrollTrigger: {
                trigger: ".card__img__holder",
                toggleActions: "restart pause reverse none",
            },
            ease: "yoyo",
            duration: 1,
            rotation: 360,
            stagger: 0.5,
            opacity: 1
        })

    })

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
                    <span className="sr__only">working hours</span>
                    <span className="duration__hrs">{props.duration}</span>
                    <span className="span__contract">{props.contract}</span>
                </div>
                <h2 className="card__title">
                    <Tippy content={`apply here`}>
                        <Link className="card--link"
                            to={`/ListPage/:${props.id}`}
                            onClick={props.linkClicked}>
                            <span className="sr__only">position offered</span>
                            {props.position}
                        </Link>
                    </Tippy>
                </h2>
                <p className="company__name">{props.company}</p>
            </div>

            <p className="card--location">
                <span className="sr__only">location</span>
                {props.location}
            </p>

        </div>
    )
}
export default Card