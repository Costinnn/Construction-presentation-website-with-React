import "./navigation.style.scss";
import navLogo from "../../assets/nav-logo.png";
import { Link, Outlet } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <div className="nav-positioning">
        <div className="nav-container">
         <Link to='/'><img className="logo" src={navLogo} alt="" /></Link> 
          <ul className="nav-list">
            <li className="phone">
              <span className="material-symbols-outlined">phone_in_talk</span>
              +40 723456876
            </li>
            <li> <Link to='services' className="link">Services</Link></li>
            <li> <Link to='portfolio' className="link">Portfolio</Link> </li>
            <li> <Link to='aboutus' className="link">About us</Link></li>
            <li> <Link to='hiring' className="link">Hiring</Link></li>
            <li> <Link to='contactus' className="link">Contact us</Link></li>
          </ul>
        </div>
      </div>

      <Outlet />
    </>
  );
};

export default Navigation;
