import "./home.style.scss";
import manison from "../../assets/manison.png";
import Button from "../../components/button/button.component";
import Services from "../../components/services/services.component";
import AboutUs from "../../components/aboutUs/aboutUs.component";

const Home = () => {
  return (
    <div>
      <div className="background-color">
        <div className="section1">
          <div className="s1-text">
            <h1>
              IF YOU CAN DREAM IT,<br></br> WE CAN BUILT IT.
            </h1>
            <p>
              We deal with the construction of a house from A to Z. We take care
              that you will have access to the best specialists for finishes,
              installations, structure and so on. The quality of the final
              product is what represents us
            </p>
            <Button>Get more information</Button>
          </div>
          <div>
            <img className="manison" src={manison} alt="" />
          </div>
        </div>
      </div>
      <Services />
      <AboutUs/>
    </div>
  );
};

export default Home;
