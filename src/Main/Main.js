import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from './HomePage'
import ListPage from './ListPage'
import { JobsProvider } from './JobsContext'
const Main = () => {
   console.log("JobsProvider")
    return (
        <div>
            <Router>
                <Switch>
                <JobsProvider>
                    <Route exact path="/">
                        <HomePage />
                    </Route>
                    <Route path="/:id">
                        <ListPage />
                    </Route>
                    </JobsProvider>
                </Switch>
            </Router>
        </div>
    )
}
export default Main
