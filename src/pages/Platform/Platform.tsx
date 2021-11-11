import "./Platform.scss";
import "../../variables.scss";
import Nav from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import moldimg from "../../assets/mold.jpg";
import identify from "../../assets/identify.png";
import design from "../../assets/design.png";
import create from "../../assets/create.png";
import scale from "../../assets/scale.png";

const Platform = () => {
  return (
    <>
      <Nav />
      <div className="platform">
        <div className="content">
          <h2>Tech Platform</h2>
          <em>
            We identify, design, create and scale filamentous fungal cells to
            produce sustainable, inexpensive, and high-quality proteins for the
            feed and food industry.
          </em>
          <img src={moldimg} alt="decorative" />
          <p>
            Filamentous fungi represent a large group of multicellular
            microorganisms. They are known to biodegrade natural materials and
            can grow on anything from food waste, decaying wood, soils, plants,
            and agricultural residues. Operating as natures “cleaning service”,
            filamentous fungi play a crucial role in nature’s lifecycle. Due to
            their immense capability of biodegrading and processing many
            different natural materials, they also produce large amounts of
            proteins and other valuable molecules. These two characteristics –
            the ability to break down residues and produce high volumes of
            proteins - is what we are harnessing at Cirkulär. We use state-
            of-the-art biotechnology tools to engineer fungal cells to grow on
            industrial side-streams and produce high amounts of proteins. This
            allows us to develop sustainable, inexpensive, and high-quality
            proteins for the feed and food industry.
          </p>
        </div>
        <div className="bullet-list">
          <div className="list-content">
            <img className="icon" src={identify} alt="identify icon" />
            <div className="text-content">
              <h2>IDENTIFY</h2>
              <p>
                High-throughput screening of fungal cells to identify candidates
                that can grow on industrial side-streams.
              </p>
            </div>
          </div>
          <div className="list-content">
            <img className="icon" src={design} alt="design icon" />
            <div className="text-content">
              <h2>DESIGN</h2>
              <p>
                Leveraging bioinformatics and computational power to design
                candidate fungal cells in silico, to grow optimally on
                industrial side-streams and produce high amounts of our desired
                proteins.
              </p>
            </div>
          </div>
          <div className="list-content">
            <img className="icon" src={create} alt="create icon" />
            <div className="text-content">
              <h2>CREATE</h2>
              <p>
                We rapidly engineer promising candidates to create unique,
                proprietary fungal cells that are optimized for specific
                industrial side-streams and that produce high amounts of our
                desired proteins.
              </p>
            </div>
          </div>
          <div className="list-content">
            <img className="icon" src={scale} alt="scale icon" />
            <div className="text-content">
              <h2>SCALE</h2>
              <p>
                We collaborate with industrial partners to scale production
                rapidly, to produce tons of inexpensive, sustainable, and
                high-quality proteins to meet the demands and requirements of
                customers, consumers, the environment and beyond.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Platform;
