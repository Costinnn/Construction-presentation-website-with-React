import "./offeredServices.style.scss";
import time from "../../assets/time.png";
import group from "../../assets/group.png";
import repeat from "../../assets/repeat.png";
import materials from "../../assets/materials.png";
import constructor from "../../assets/constructor.png";
import Button from "../button/button.component";
import ServicesBox from "../servicesBoxTemplate/servicesBoxTemplate.component";
import { Link } from "react-router-dom";

const servicesData = [
  {
    img: time,
    title: "Short waiting time",
    paragraph:
      "The duration of the realization of a project depends on the availability of the materials, the working hand, and the machines used.",
  },
  {
    img: group,
    title: "Immediate availability of teams",
    paragraph:
      "The large number of partners we work with gives us the opportunity to start a job even in 24 hours.",
  },
  {
    img: repeat,
    title: "Team synchronization",
    paragraph:
      "The synchronization of the teams in the different stages of a construction is a main factor for the quality of the final product.",
  },
  {
    img: materials,
    title: "Suitable materials",
    paragraph:
      "Consulting on materials, their availability and the price-quality ratio is a service we offer to the client.",
  },
];

const OfferedServices = () => {
  return (
    <div className="positioning">
      <div className="offered-services-container">
        <div>
          <div>
            <h2>
              UNMATCHED <br /> SERVICES
            </h2>
           <Link to='services' className="link"><Button>Get free quotation</Button></Link> 
          </div>

          <img className="constructor-img" src={constructor} alt="" />
        </div>
        <div className="service-boxes">
          {servicesData.map((element) => {
            return (
              //Overkill method, but practiced more with components
              <ServicesBox
                key={element.img}
                img={element.img}
                title={element.title}
                paragraph={element.paragraph}
              />
            );
          })}
        </div>
      </div>
      <div className="background-img"></div>
      <div className="background-color"></div>
    </div>
  );
};

export default OfferedServices;
