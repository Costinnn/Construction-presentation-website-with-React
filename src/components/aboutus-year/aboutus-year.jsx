import "./aboutus-year.style.scss";

const AboutUsYear = ({year, text}) => {
  return (
    <div className="aboutus-year-box">
      <div className="year">
        <p>{year}</p>
      </div>
      <p className="text">{text}</p>
    </div>
  );
};

export default AboutUsYear;
