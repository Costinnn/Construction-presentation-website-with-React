import "./hiring.style.scss";

const HiringPage = () => {
  return (
    <div className="menu-page-positioning">
      <div>
        <div className="background-color"></div>
        <div className="hiring-img menu-pages-img"></div>
      </div>

      <div className="hiring-page-container">
        <h1>
          We are hiring professionals for the following available positions
          within our company:
        </h1>
        <p>
          - Craftsmen for interior finishes. <br />
          - Craftsmen for exterior finishes. <br />
          - Bricklayers. <br />
          - Craftsmen for plastering. <br />
          - Plumbers. <br />
          - Bulldozer drivers. <br />
          - Truck drivers. <br />- If you have worked in construction, but do
          not find yourself in the list above, do not hesitate to contact us.
        </p>

        <h2>
          Contact us at +04 723 456 876 <br />
          or email us at constructionfirm@gmail.com
        </h2>
      </div>
    </div>
  );
};

export default HiringPage;
