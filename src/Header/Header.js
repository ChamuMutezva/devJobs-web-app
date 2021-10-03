import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import Logo from '../assets/desktop/logo.svg'
import ThemeController from './ThemeControl'
const Header = () => {
    const svgHeader = React.createRef()

    useEffect(() => {
        gsap.from(svgHeader.current, {
            color: 'red', duration: 2,
            y: -20,
            opacity: 0,
            ease: 'elastic'
        })
    }, [svgHeader])
    return (
        <header className="header">
            <div className="header__container">
                <Link to="/" className="app__title--btn" aria-label="welcome to devjobs">
                    <img src={Logo} alt="" ref={svgHeader} />
                </Link>
                <ThemeController />
            </div>

        </header>
    )
}
export default Header