import "./quotation-banner.style.scss";
import Button from "../button/button.component";

const QuotationBanner = () => {
  return (
    <div className="banner-positioning">
      <div className="banner-content">
        <div>
          <h2>ALL TIME, ANYTIME, ANYWHERE ON TIME.</h2>
          <p>
            We do all kind of construction work, but we also do construction
            consulting.
          </p>
        </div>
        <Button buttonType="nomargin">GET FREE QUOTATION</Button>
      </div>
    </div>
  );
};

export default QuotationBanner;
