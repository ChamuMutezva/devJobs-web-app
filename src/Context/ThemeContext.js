import { useState , createContext } from 'react'

export const ThemeContext = createContext()

export const ThemeProvider = (props) => {
    const [theme, setTheme] = useState(false)
    return (
        <ThemeContext.Provider value="dark">
            {props.children}
        </ThemeContext.Provider>
    )
}