import "./portfolio.style.scss";

const PortfolioComponent = ({ img, info }) => {
  return (
    <div className="portfolio-component">
      <div>
        <img src={img} alt="" />
      </div>

      <p>
        <span className="material-symbols-outlined">pin_drop</span>
        {info}
      </p>
    </div>
  );
};

export default PortfolioComponent;
