import "./hiring.style.scss";
import QuotationBanner from "../../components/quotation-banner/quotation-banner.component";

const HiringPage = () => {
  return (
    <div className="menu-page-positioning">
      <div>
        <div className="background-color"></div>
        <div className="hiring-img menu-pages-img"></div>
      </div>

      <div className="hiring-page-container">
        <h1>Hiring page</h1>
      </div>
      <QuotationBanner />
    </div>
  );
};

export default HiringPage;
