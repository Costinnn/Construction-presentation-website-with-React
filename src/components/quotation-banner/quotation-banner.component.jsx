import "./quotation-banner.style.scss";
import Button from "../button/button.component";
import { Link } from "react-router-dom";

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
        <Link to="/contactus" className="link">
          <Button buttonType="nomargin">GET FREE QUOTATION</Button>
        </Link>
      </div>
    </div>
  );
};

export default QuotationBanner;
