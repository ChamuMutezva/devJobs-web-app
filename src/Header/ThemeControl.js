import { useContext } from 'react'
import Sun from '../assets/desktop/icon-sun.svg'
import Moon from '../assets/desktop/icon-moon.svg'
import { ThemeContext } from '../Context/ThemeContext'

const ThemeController = () => {

    const { theme, onChange } = useContext(ThemeContext)
    console.log(theme)
    return (

        <fieldset className="radio-switch">

            <legend> Settings </legend>

            <input type="radio"
                name="themes"
                id="light"
                onChange={onChange}
            />
            <label htmlFor="light">
                <span className="sr__only">Light mode</span>
                <img className="theme__img" src={Sun} alt="" />
            </label>

            <input type="radio"
                name="themes"
                id="dark"
                onChange={onChange}
            />
            <label htmlFor="dark">
                <span className="sr__only">Dark mode</span>
                <img className="theme__img" src={Moon} alt="" />
            </label>
        </fieldset>
    )
}
export default ThemeController