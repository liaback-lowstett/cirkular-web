import "./Dairyprotein.scss";
import Nav from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import dairyimg from "../../assets/dairy.jpg";

const Dairyprotein = () => {
  return (
    <>
      <Nav />
      <div className="dairyprotein">
        <div className="content">
          <img src={dairyimg} alt="fishfeed" />
          <div className="text">
            <h3>USE CASE</h3>
            <h2>Dairy Protein</h2>
            <p>
              Dairy production is putting immense pressure on the environment.
              As a consequence, alternative sources of producing sustainable
              dairy products is one of the fastest growing industries and the
              industry is actively looking at alternative proteins to develop
              animal-free products. Our fungi are engineered to produce casein -
              milk protein - which can be used by dairy producers and vegan
              companies to develop better animal-free cheese, yoghurts and
              beyond.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dairyprotein;
