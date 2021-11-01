import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navi from "./components/Header";
import { UserListProvider } from "./context/UserContext";
import Home from "./components/home";
import VideoPlayer from "./components/video/VideoPlayer";
import AddUser from "./components/CreateUser";
import UpdatePwd from "./components/UpdatePwd";
import Bottom from "./components/Bottom"



const App = () => {
    return (
        <React.Fragment>
            <Navi />
            <UserListProvider>
                <div className = "container">
                    <Router>
                        <Switch>
                            <Route exact path = "/" component={Home}/>
                            <Route exact path = "/video" component={VideoPlayer}/>
                            <Route exact path = "/accounts" component={UpdatePwd}/>
                            <Route exact path = "/accounts/:id" component={AddUser}/>
                        </Switch>
                    </Router>
                </div>
            </UserListProvider>
            <br />
            <br />
            <Bottom />
    </React.Fragment>
)};



export default App;
