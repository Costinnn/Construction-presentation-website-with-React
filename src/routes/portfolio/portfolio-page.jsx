import "./portfolio.style.scss";
import QuotationBanner from "../../components/quotation-banner/quotation-banner.component";
import PortfolioComponent from "../../components/portfolio-component/portfolio.component";
import bathroom1 from "../../assets/menu-pages/portfolio/bathroom.jpg";
import bathroom2 from "../../assets/menu-pages/portfolio/bathroom2.jpg";
import bathroom3 from "../../assets/menu-pages/portfolio/bathroom3.jpg";
import exterior1 from "../../assets/menu-pages/portfolio/exterior.jpeg";
import exterior2 from "../../assets/menu-pages/portfolio/exterior2.jpg";
import fence1 from "../../assets/menu-pages/portfolio/fence.jpg";
import fence2 from "../../assets/menu-pages/portfolio/fence2.jpg";
import fence3 from "../../assets/menu-pages/portfolio/fence3.jpg";
import house1 from "../../assets/menu-pages/portfolio/house.png";
import house2 from "../../assets/menu-pages/portfolio/house2.jpg";
import house3 from "../../assets/menu-pages/portfolio/house3.jpg";
import house4 from "../../assets/menu-pages/portfolio/house4.jpg";
import interior1 from "../../assets/menu-pages/portfolio/interior1.jpg";
import interior2 from "../../assets/menu-pages/portfolio/interior2.jpg";
import interior3 from "../../assets/menu-pages/portfolio/interior3.jpg";
import interior4 from "../../assets/menu-pages/portfolio/interior4.jpg";
import terrace from "../../assets/menu-pages/portfolio/terrace.jpeg";

const PORTFOLIO_DATA = [
  { img: bathroom1, info: "Bathroom made in Bucharest" },
  { img: bathroom2, info: "Bathroom made in Cluj" },
  { img: bathroom3, info: "Bathroom made in Iasi" },
  { img: exterior1, info: "Exterior finishes in Bucharest" },
  { img: exterior2, info: "Exterior finishes in Cluj" },
  { img: fence1, info: "Fence made in Iasi" },
  { img: fence2, info: "Fence made in Constanta" },
  { img: fence3, info: "Fence made in Brasov" },
  { img: house1, info: "House built in Iasi" },
  { img: house2, info: "House built in Budapest" },
  { img: house3, info: "House built in Suceava" },
  { img: house4, info: "House built in Bucharest" },
  { img: interior1, info: "Interior finishes in Bucharest" },
  { img: interior2, info: "Interior finishes in Bucharest" },
  { img: interior3, info: "Interior finishes in Cluj" },
  { img: interior4, info: "Interior finishes in Bucharest" },
  { img: terrace, info: "Terrace made in Timisoara" },
];

const PortfolioPage = () => {
  return (
    <div className="menu-page-positioning ">
      <div>
        <div className="background-color"></div>
        <div className="portfolio-img menu-pages-img"></div>
      </div>
      <div className="portfolio-img2"></div>
      <h1 className="portfolio-title">Few of our favorite projects</h1>
      <div className="portfolio-page-container">
        {PORTFOLIO_DATA.map((element) => (
          <PortfolioComponent img={element.img} info={element.info} />
        ))}
      </div>
      <QuotationBanner />
    </div>
  );
};

export default PortfolioPage;
