import React, {useState} from "react";
import { Form, FormGroup, FormControl, FormText, FormLabel , Button} from "react-bootstrap";
import UserFinder from "../APIs/UserFinder";


const AddUser = () => {

    const [username,setUsername] = useState("");
    const [pwd,setPwd] = useState("");
    const handleSubmit = async(e) => {
        try {
            const response = await UserFinder.post("/", {
                username,
                pwd
            });
            console.log(response);
        } catch (err) {
            console.log("uh oh")
        }
    };

    return (
        <div className = "container">
            <Form>
                <FormGroup className="mb-5" controlId="formBasicEmail">
                    <FormLabel>Username</FormLabel>
                    <FormControl value={username} onChange= {e => setUsername(e.target.value)} 
                    type="text" placeholder="Enter username" />
                    <FormText className="text-muted">
                    </FormText> 
                    <FormLabel>Password</FormLabel>
                    <FormControl value={pwd} onChange= {e => setPwd(e.target.value)}
                    type="text" placeholder="Enter password" />
                    <FormText className="text-muted">
                    </FormText> 
                    <br /> 
                    <Button onClick={handleSubmit} variant="outline-primary" type="submit">Submit</Button>
                </FormGroup>  
            </Form>
        </div>
    );
};

export default AddUser;
