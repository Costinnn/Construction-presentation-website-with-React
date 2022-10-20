import "./servicesBoxTemplate.style.scss";

const ServicesBox = ({img, title, paragraph}) => {
  return (
    <div className="services-box">
      <img src={img} alt="" />
      <h3>{title}</h3>
      <p>{paragraph}</p>
    </div>
  );
};

export default ServicesBox;
