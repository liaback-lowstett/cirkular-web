import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import Accordion from "../../components/Accordion/Accordion";
import { data } from "../../utils/data";

import "./Career.scss";
import "../../variables.scss";

const Career: React.FC<any> = () => {
  return (
    <>
      <Nav />
      <div className="career">
        <section className="content">
          <section className="intro">
            <h2>Career</h2>
            <p>
              We are a team of relentless entrepreneurs and world-class
              researchers that feel a sense of urgency and responsibility in
              providing sustainable and rational solutions to the growing
              problems associated with climate change and beyond. As a company,
              we stand for honesty, transparency, and openness, to foster a work
              environment that has a sense of community and purpose in
              everything we do.
            </p>
          </section>
          <section className="open-positions">
            <h3>Open positions</h3>
            <p>We are currently searching for the following positions:</p>
            {/* map over open positions when WP is set up */}
            <ul>
              <li>Position one</li>
              <li>Position two</li>
            </ul>
            <p>
              If these positions do not suit you but you think you are a great
              fit to Cirkulär, please send us an email and we will be in touch.
              We are always looking for exceptional people to join our mission!
            </p>
          </section>
          <img src="" alt="decorative" />
          <section className="culture">
            <h3>Our culture</h3>
            <p>
              As a company, we stand for honesty, transparency, and openness, to
              foster a work environment that has a sense of community and
              purpose in everything we do.
            </p>
            <div className="accordion">
              {data.map(({ title, content }) => (
                <Accordion title={title} content={content} />
              ))}
            </div>
          </section>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Career;
