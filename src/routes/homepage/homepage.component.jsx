import "./homepage.style.scss";
import Header from "../../components/header/header.component";
import Services from "../../components/services/services.component";
import AboutUs from "../../components/aboutUs/aboutUs.component";
import OfferedServices from "../../components/offeredServices/offeredServices.component";
import Clients from "../../components/clients/clients.component";

const Homepage = () => {
  return (
    <div>
      <Header />
      <Services />
      <AboutUs />
      <OfferedServices/>
      <Clients />
    </div>
  );
};

export default Homepage;
