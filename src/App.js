import Navigation from "./routes/navigation/navigation.component";
import Homepage from "./routes/homepage/homepage.component";
import ServicesPage from "./routes/services/services-page";
import PortfolioPage from "./routes/portfolio/portfolio-page";
import AboutUsPage from "./routes/aboutUs/aboutUs-page";
import HiringPage from "./routes/hiring/hiring-page";
import ContactUsPage from "./routes/contactUs/contactUs-page";
import { Route, Routes } from "react-router-dom";
 import "./App.scss";

function App() {
  return (<div className="app">
    <Routes>
      <Route path="/" element={<Navigation/>}>
        <Route index element={<Homepage/>}></Route>
        <Route path="services" element={<ServicesPage/>}></Route>
        <Route path="portfolio" element={<PortfolioPage/>}></Route>
        <Route path="aboutus" element={<AboutUsPage/>}></Route>
        <Route path="hiring" element={<HiringPage/>}></Route>
        <Route path="contactus" element={<ContactUsPage/>}></Route>
      </Route>
    </Routes>
    </div>
  );
}

export default App;
