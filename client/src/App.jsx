import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navi from "./components/Header";
import { UserListProvider } from "./context/UserContext";
import Home from "./routes/home";
import VideoPlayer from "./components/VideoPlayer";
import AddUser from "./components/CreateUser";
import UpdatePwd from "./components/UpdatePwd";



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
    </React.Fragment>
)};



export default App;
