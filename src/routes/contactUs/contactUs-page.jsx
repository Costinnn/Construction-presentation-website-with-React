import "./contactUs.style.scss";
import QuotationBanner from "../../components/quotation-banner/quotation-banner.component";

const ContactUsPage = () => {
  return (
    <div className="menu-page-positioning">
      <div>
        <div className="background-color"></div>
        <div className="contactus-img menu-pages-img"></div>
      </div>

      <div className="contactus-page-container">
        <h1>Contact Us page</h1>
      </div>
      <QuotationBanner />
    </div>
  );
};

export default ContactUsPage;
