import "./clients.style.scss";
import clientsHouse from "../../assets/clients-house.jpg";
import clientsExcavator from "../../assets/clients-excavator.png";
import client1 from "../../assets/client1.jpg";
import client2 from "../../assets/client2.jpg";
import Button from "../button/button.component";
import { Link } from "react-router-dom";

const Clients = () => {
  return (
    <div className="positioning">
      <div className="clients-section1">
        <div className="cs-text">
          <h2>SATISFIED CLIENTS WE SERVED FOR YEARS</h2>
          <p>
            Based in Iasi since 2000, we have a long-standing reputation as a
            construction company that provides all services for turnkey houses
            and other small or big construction projects.
          </p>
          <Link to="portfolio" className="link">
            <Button>Discover more about our projects</Button>
          </Link>
        </div>
        <div className="cs-reviews">
          <div>
            <img className="client-photo" src={client1} alt="" />
            <h4>Jessie M.</h4>
            <p>
              "They employ a team of talented construction experts with a wealth
              of pan-industry knowledge to enable tailor solutions and services
              that think outside the box, and ultimately go that one step
              further in meeting your precise needs"
            </p>
          </div>
          <div>
            <img className="client-photo" src={client2} alt="" />
            <h4>Kate G.</h4>
            <p>
              "They employ a team of talented construction experts with a wealth
              of pan-industry knowledge to enable tailor solutions and services
              that think outside the box, and ultimately go that one step
              further in meeting your precise needs"
            </p>
          </div>
        </div>
        <div className="clients-shape"></div>
      </div>
      <div className="clients-section2">
        <div className="cs2-photos">
          <div className="clients-house">
            <img src={clientsHouse} alt="" />
          </div>

          <img className="clients-excavator" src={clientsExcavator} alt="" />
        </div>

        <div className="cs2-text">
          <h2>OUR GOAL</h2>
          <p>
            It is our mission to ensure that we offer the best possible range of
            solutions and teamwork alongside in-depth consultation and advice
            that ensures your specific requirements are achieved. We always try
            to target excellence.
          </p>
          <div>
            <span className="material-symbols-outlined">
              star star star star star_half
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
