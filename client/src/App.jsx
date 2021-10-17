import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navi from "./components/Header";
import { UserListProvider } from "./context/UserContext";
import Home from "./routes/home";
import UpdateInfo from "./routes/UpdateInfo";
import VideoPlayer from "./components/video";
import AddUser from "./components/CreateUser";


const App = () => {
    return (
        <React.Fragment>
            <Navi />
            <AddUser />
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
    </React.Fragment>
)};



export default App;
