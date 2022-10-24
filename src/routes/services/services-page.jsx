import "./services.style.scss";
import excavation from "../../assets/menu-pages/services/excavation.png";
import house from "../../assets/menu-pages/services/house.png";
import instalations from "../../assets/menu-pages/services/instalations.jpg";
import electricity from "../../assets/menu-pages/services/electricity.jpg";
import interiorwork from "../../assets/menu-pages/services/interiorwork.jpg";
import interiorfinishes from "../../assets/menu-pages/services/interior-finishes.jpg";
import finishedhouse from "../../assets/menu-pages/services/housefinished.png";
import SPComponent from "../../components/services-page-component/spcomponent";

const SERVICES_DATA = [
  {
    id: 1,
    img: excavation,
    title: "Excavation work",
    info: "We carry out any type of excavation, from foundations for houses or fences, to digging for cellars or branches of any type.",
  },
  {
    id: 2,
    img: house,
    title: "House building",
    info: "We build houses according to the client's requirements, either just the structure of pillars and bricks or up to the finishing touches.",
  },
  {
    id: 3,
    img: instalations,
    title: "Any type of instalations",
    info: "We design and execute heating installations through radiators or through the floor, sanitary installations or any other type of necessary installations.",
  },
  {
    id: 4,
    img: electricity,
    title: "Electricity work",
    info: "We design and execute electrical installations for civil buildings with certified electricians. At the same time, we offer consultancy in choosing the best materials for each individual project.",
  },
  {
    id: 5,
    img: interiorwork,
    title: "Interior work",
    info: "We make plasters, mechanized hoes, plasterboard cladding, flashings and many others.",
  },
  {
    id: 6,
    img: interiorfinishes,
    title: "Interior finishes",
    info: "We carry out interior finishes up to the final stage of a building. We have craftsmen for parquet, ceramic cladding, door assembly, cladding with triple-layered wood.",
  },
  {
    id: 7,
    img: finishedhouse,
    title: "Turnkey houses",
    info: "We carry out external finishes, plating with polystyrene or mineral wool, applying the appropriate adhesive, applying decoration and so on.",
  },
];

const ServicesPage = () => {
  return (
    <div className="menu-page-positioning services-img">
      <div className="background-color"></div>
      <div className="services-page-container">
        {SERVICES_DATA.map((element) => (
          <SPComponent
            key={element.id}
            img={element.img}
            title={element.title}
            info={element.info}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
