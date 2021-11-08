import knh from "../pictures/knh.jpg";
import {Button, Container} from "react-bootstrap";


const Pic = () => {
    return(
      <div className="d-grid gap-2 text-center">
          <Container className="fluid">
          <h4 >
              you are already signed in, no need to create account
          </h4>
          <img src={knh} width="auto" height="auto"/>
          </Container>
          
        <Button variant="outline-success" size = "lg" href = "https://www.youtube.com/c/KOTARO_OTTER">watch</Button>

      </div>  
    )
};


export default Pic;
