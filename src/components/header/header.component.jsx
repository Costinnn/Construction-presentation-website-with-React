import "./header.style.scss";
import manison from "../../assets/manison.png";
import Button from "../button/button.component";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <div className="section1">
        <div className="s1-text">
          <h1>
            IF YOU CAN DREAM IT,<br></br> WE CAN BUILT IT.
          </h1>
          <p>
            We deal with the construction of a house from A to Z. We take care
            that you will have access to the best specialists for finishes,
            installations, structure and so on. The quality of the final product
            is what represents us
          </p>
         <Link to='services'><Button>Get more information</Button></Link> 
        </div>
        <div>
          <img className="manison" src={manison} alt="" />
        </div>
      </div>
      <div className="background-img"></div>
      <div className="background-color"></div>
      
    </div>
  );
};

export default Header;
