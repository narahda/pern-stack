import React from "react";
import AddUser from "./CreateUser";
import owlet from "../pictures/owlet.jpg";

import Bottom from "./Bottom";

const Home = () => {
    return(
        <div>
            <h1 text-align="center">wouldn't this usually be a company description anyway have this thing i found from a random pic generator</h1>
            <img src ={owlet} width="1000" height= "auto"/>
            <Bottom/>
        </div>
    )
};

export default Home;