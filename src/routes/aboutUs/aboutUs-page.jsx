import "./aboutUs.style.scss";
import QuotationBanner from "../../components/quotation-banner/quotation-banner.component";
import AboutUsYear from "../../components/aboutus-year/aboutus-year";

const ABOUTUS_DATA = [
  { year: 2000, text: "We started as a small interior finishing team." },
  {
    year: 2003,
    text: "We increased our team and started external finishing works and other small works.",
  },
  {
    year: 2007,
    text: "We started to build houses and any civil buildings with our own machines.",
  },
  {
    year: 2012,
    text: "We started collaborating with teams of electricians or plumbers to offer the end customer the full range of services for a construction.",
  },
  {
    year: 2018,
    text: "After all this time in this field, we also started to offer consultancy regarding the choice of materials.",
  },
  {
    year: "Now",
    text: "We continuously try to offer the best product to the end customer.",
  },
];

const AboutUsPage = () => {
  return (
    <div className="menu-page-positioning">
      <div>
        <div className="background-color"></div>
        <div className="aboutus-img menu-pages-img"></div>
      </div>
      <div className="aboutus-page-container">
        <div className="title">
          <p>
            We started our activity in the field of constructions in the year
            2000 by making interior finishes for various domestic clients. In
            the meantime, our team has grown, and the services we offer include
            the entire range of services for building a house ready to live in.
          </p>
        </div>

        <div className="evolution">
          {ABOUTUS_DATA.map((element) => (
            <AboutUsYear year={element.year} text={element.text} />
          ))}
        </div>
      </div>
      <QuotationBanner />
    </div>
  );
};

export default AboutUsPage;
