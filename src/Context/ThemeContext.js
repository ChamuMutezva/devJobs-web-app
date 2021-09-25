import { useState, createContext, useEffect } from 'react'

export const ThemeContext = createContext()

export const ThemeProvider = (props) => {

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
    const onChange = () => {
        postThemeToLocalStorage(!theme)
        setTheme(!theme)
    }

    /* Trigger useEffect only on render */
    /* Set theme state to saved theme in local storage */
    useEffect(() => {
        const main = document.querySelector(".app__container")
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
        <ThemeContext.Provider value={{ theme, onChange }}>
            {props.children}
        </ThemeContext.Provider>
    )
}