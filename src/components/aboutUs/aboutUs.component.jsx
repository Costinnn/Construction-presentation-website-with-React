import "./aboutUs.style.scss";
import houseStage from "../../assets/house-stage.jpg";
import Button from "../button/button.component";

const AboutUs = () => {
  return (
    <div className="positioning">
      <div className="aboutUs-container">
        <div className="shape1"></div>
        <div className="shape2"></div>
        <div className="shape4"></div>
        <div className="photo-container">
          <img className="back-image" src={houseStage} alt="" />
          <img className="houseStage" src={houseStage} alt="" />
          <div className="shape3"></div>
        </div>
        <div className="aboutUs-text">
          <h2>ABOUT US</h2>
          <p>
            <span>
              The company's management constantly follows market requirements
              and aims for customer satisfaction for each project. The company
              offers global solutions in accordance with the national and
              international standards in force. It rigorously ensures compliance
              with all safety and quality standards in the field of
              construction.
            </span>
            <br />
            <br />
            Our mission is based on promptness, correctness and seriousness in
            honoring projects. The company adapts to the needs and possibilities
            of the clients, respecting the established deadlines and budgets.
            The experience of over 15 years in the field of the work team
            ensures the completion of complex projects.
            <br />
            <br />
            We actively collaborate with all the experts involved in the project
            and with the clients for the efficient and beneficial solution for
            all parties of all problems that arise during the activity.
          </p>
          <Button>Discover more about us</Button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
