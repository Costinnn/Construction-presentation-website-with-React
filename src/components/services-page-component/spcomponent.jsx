import "./spcomponent.style.scss";

const SPComponent = ({img, title, info}) => {
  return (
    <div className="sp-container">
      <div className="sp-img">
        <img src={img} alt="" />
      </div>

      <div className="sp-text">
        <h3>{title}</h3>
        <p>{info}</p>
        <div className="shape"></div>
      </div>
    </div>
  );
};

export default SPComponent;
