import { useState, useEffect } from 'react'
import Sun from '../assets/desktop/icon-sun.svg'
import Moon from '../assets/desktop/icon-moon.svg'

const ThemeController = () => {
    /* Get theme value from localStorage. */
    const getThemeFromLocalStorage = () => {
        return localStorage.getItem("globalTheme") === "true"
    }
    const [theme, setTheme] = useState(getThemeFromLocalStorage)


    /* Post to localStorage user preferred theme. */
    const postThemeToLocalStorage = (newTheme) => {
        localStorage.setItem("globalTheme", newTheme)
    }



    /* Click handler */
    const onChange = (evt) => {
        console.log(evt.target)
        postThemeToLocalStorage(!theme)
        setTheme(!theme)
    }

    /* Trigger useEffect only on render */
    /* Set theme state to saved theme in local storage */
    useEffect(() => {
        const main = document.querySelector(".main")
        const lightBtn = document.querySelector("#light")
        const darkBtn = document.querySelector("#dark")
        setTheme(getThemeFromLocalStorage())

        // ToDo: combining ternary conditions as in the 2 below
        theme
            ? main.classList.remove("theme-dark")
            : main.classList.add("theme-dark")

        theme
            ? lightBtn.setAttribute("checked", true)
            : darkBtn.setAttribute("checked", true)


    }, [theme])


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