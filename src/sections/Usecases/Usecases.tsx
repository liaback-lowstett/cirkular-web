import { Link } from "react-router-dom";
import "./Usecases.scss";

import { HomeResult } from "../../pages/Home/utils";

const Usecases: React.FC<HomeResult["useCase"]> = ({
  aquafeedDescription,
  aquafeedHeader,
  aquafeedImage,
  dairyProteinsDescription,
  dairyProteinsHeader,
  dairyProteinsImage,
  useCaseHeader,
}) => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <section className="usecase">
      <div className="heading">
        <h2>{useCaseHeader}</h2>
      </div>
      <div className="content">
        <div className="content-wrapper">
          <img className="image" src={aquafeedImage.url} alt="fishfeed" />
          <div className="text">
            <h3>{aquafeedHeader}</h3>
            <p>{aquafeedDescription}</p>
            <Link
              aria-label="navigation aquafeed"
              to="/aquafeed"
              onClick={scrollToTop}
            >
              <button>Learn more</button>
            </Link>
          </div>
        </div>
        <div className="content-wrapper">
          <img
            className="image"
            src={dairyProteinsImage.url}
            alt="dairy proteins"
          />
          <div className="text">
            <h3>{dairyProteinsHeader}</h3>
            <p>{dairyProteinsDescription}</p>
            <Link
              aria-label="navigation dairy protein"
              to="/dairyprotein"
              onClick={scrollToTop}
            >
              <button>Learn more</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Usecases;
