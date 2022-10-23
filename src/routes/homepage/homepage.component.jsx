import "./homepage.style.scss";
import Header from "../../components/header/header.component";
import Services from "../../components/services/services.component";
import AboutUs from "../../components/aboutUs/aboutUs.component";
import OfferedServices from "../../components/offeredServices/offeredServices.component";
import Clients from "../../components/clients/clients.component";
import QuotationBanner from "../../components/quotation-banner/quotation-banner.component";

const Homepage = () => {
  return (
    <div>
      <Header />
      <Services />
      <AboutUs />
      <OfferedServices/>
      <Clients />
      <QuotationBanner />
    </div>
  );
};

export default Homepage;
