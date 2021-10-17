import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { UserListProvider } from "./context/UserContext";
import Home from "./routes/home";
import UpdateInfo from "./routes/Information/UpdateInfo";
import VideoPlayer from "./routes/video";


const App = () => {
    return (
    <UserListProvider>
        <div className = "container">
            <Router>
                <Switch>
                    <Route exact path = "/" component={VideoPlayer}/>
                    <Route exact path = "/accounts" component={Home}/>
                    <Route exact path = "/accounts/:id" component={UpdateInfo}/>
                </Switch>
            </Router>
        </div>
    </UserListProvider>
)};



export default App;
