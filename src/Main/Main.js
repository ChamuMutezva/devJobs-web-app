import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from './HomePage'
import ListPage from './ListPage'
const Main = () => {
   
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <HomePage />
                    </Route>
                    <Route path="/:id">
                        <ListPage />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}
export default Main
