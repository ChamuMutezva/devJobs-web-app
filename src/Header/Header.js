import { Link } from "react-router-dom"
import Logo from '../assets/desktop/logo.svg'
import ThemeController from './ThemeControl'
const Header = () => {

    return (
        <header className="header">
            <Link to="/" className="app__title--btn" aria-label="welcome to devjobs">
                <img src={Logo} alt="" />
            </Link>

            <ThemeController />

        </header>
    )
}
export default Header