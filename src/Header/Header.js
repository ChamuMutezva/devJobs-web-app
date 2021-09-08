import Logo from '../assets/desktop/logo.svg';
import ThemeController  from './ThemeControl';
const Header = () => {
   
    return (
        <header className="header">
            <a href="/" className="app__title--btn" aria-label="welcome to devjobs">
                <img src={Logo} alt="" />
            </a>
         
            <ThemeController />

        </header>
    )
}
export default Header