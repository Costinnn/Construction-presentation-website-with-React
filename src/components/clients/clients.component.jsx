import "./clients.style.scss";
import Button from "../button/button.component";

const Clients = () => {
  return (
    <div className="positioning">
      <div>
        <div>
          <h2>SATISFIED CLIENTS WE SERVED FOR YEARS</h2>
          <p>
            Based in Iasi since 2000, we have a long-standing reputation as a
            construction company that provides all services for turnkey houses
            and other small or big construction projects.
          </p>
          <Button>Discover more about our projects</Button>
        </div>
        <div>
          <div>
            <img src="" alt="" />
            <h4>Steven M.</h4>
            <p>
              "They employ a team of talented construction experts with a wealth
              of pan-industry knowledge to enable tailor solutions and services
              that think outside the box, and ultimately go that one step
              further in meeting your precise needs"
            </p>
          </div>
          <div>
            <img src="" alt="" />
            <h4>Mark G.</h4>
            <p>
              "They employ a team of talented construction experts with a wealth
              of pan-industry knowledge to enable tailor solutions and services
              that think outside the box, and ultimately go that one step
              further in meeting your precise needs"
            </p>
          </div>
        </div>
      </div>
      <div>
        <img src="" alt="" />
        <div>
          <h2>OUR GOAL</h2>
          <p>
            It is our mission to ensure that we offer the best possible range of
            solutions and teamwork alongside in-depth consultation and advice
            that ensures your specific requirements are achieved. We always try
            to target excellence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Clients;
