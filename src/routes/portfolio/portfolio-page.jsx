import "./portfolio.style.scss";
import QuotationBanner from "../../components/quotation-banner/quotation-banner.component";

const PortfolioPage = () => {
  return (
    <div className="menu-page-positioning ">
      <div>
        <div className="background-color"></div>
        <div className="portfolio-img menu-pages-img"></div>
      </div>
      <div className="portfolio-page-container">
        <h1>Portfolio PAge</h1>
      </div>
      <QuotationBanner />
    </div>
  );
};

export default PortfolioPage;
