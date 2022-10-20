import "./navigation.style.scss";
import navLogo from "../../assets/nav-logo.png";

const Navigation = () => {
  return (
    <div className="nav-container">
      <img className="logo" src={navLogo} alt="" />
      <ul className="nav-list">
        <li className="phone">
          <span className="material-symbols-outlined">phone_in_talk</span>+40
          723456876
        </li>
        <li>Services</li>
        <li>Portfolio</li>
        <li>About us</li>
        <li>Hiring</li>
        <li>Contact us</li>
      </ul>
    </div>
  );
};

export default Navigation;
