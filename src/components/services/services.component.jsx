import "./services.style.scss";
import electric from "../../assets/electric.png";
import house from "../../assets/house.png";
import interior from "../../assets/staircase.png";
import excavator from "../../assets/excavator.png";
import Button from "../button/button.component";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="services-container">
      <div className="divs-box">
        <div>
          <img src={house} alt="" />
          <h3>Turnkey custom houses</h3>
          <p>
            We build turnkey houses according to the customer's specifications.
          </p>
          <Link to="services" className="link">
            <Button buttonType="hidden">Find out more</Button>
          </Link>
        </div>
        <div>
          <img src={interior} alt="" />
          <h3>Interior finishes</h3>
          <p>
            Our teams specialized in interior finishes can fulfill any
            customer's wish.
          </p>
          <Link to="services" className="link">
            <Button buttonType="hidden">Find out more</Button>
          </Link>
        </div>
        <div>
          <img src={electric} alt="" />
          <h3>Electrical, sanitary installations</h3>
          <p>
            The quality of the installations and their long life span are the
            main criteria for us.
          </p>
          <Link to="services" className="link">
            <Button buttonType="hidden">Find out more</Button>
          </Link>
        </div>
        <div>
          <img src={excavator} alt="" />
          <h3>Excavations</h3>
          <p>
            The machines in our fleet can perform any excavation that the
            customer needs.
          </p>
          <Link to="services" className="link">
            <Button buttonType="hidden">Find out more</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
