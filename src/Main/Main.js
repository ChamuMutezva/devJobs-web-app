import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from './HomePage'
import ListPage from './ListPage'
import { JobsProvider } from './JobsContext'
import { ThemeProvider } from "../Context/ThemeContext";
const Main = () => {

    return (
        <div>
            <Router>
                <Switch>
                    <JobsProvider>
                        <ThemeProvider>
                            <Route exact path="/">
                                <HomePage />
                            </Route>
                            <Route path="/:id">
                                <ListPage />
                            </Route>
                        </ThemeProvider>
                    </JobsProvider>
                </Switch>
            </Router>
        </div>
    )
}
export default Main
