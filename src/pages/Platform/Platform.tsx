import "./Platform.scss";
import "../../variables.scss";
import Nav from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import identify from "../../assets/identify.png";
import design from "../../assets/design.png";
import create from "../../assets/create.png";
import scale from "../../assets/scale.png";
import { useFetch } from "../../hooks/useFetch";
import { TechPlatformResult } from "./utils";

const Platform = () => {
  const { data } = useFetch<Array<any>>(
    `${process.env.REACT_APP_API_PAGES}=tech-platform`
  );
  const result: TechPlatformResult = data && data?.length > 0 && data[0].acf;

  return result ? (
    <>
      <Nav />
      <div className="platform">
        <div className="content">
          <h2>{result.header}</h2>
          <span dangerouslySetInnerHTML={{ __html: result.body }}></span>
        </div>
        <div className="bullet-list">
          <div className="list-content">
            <img className="icon" src={identify} alt="identify icon" />
            <div className="text-content">
              <h2>{result.identify.header}</h2>
              <p>{result.identify.description}</p>
            </div>
          </div>
          <div className="list-content">
            <img className="icon" src={design} alt="design icon" />
            <div className="text-content">
              <h2>{result.design.header}</h2>
              <p>{result.design.description}</p>
            </div>
          </div>
          <div className="list-content">
            <img className="icon" src={create} alt="create icon" />
            <div className="text-content">
              <h2>{result.create.header}</h2>
              <p>{result.create.description}</p>
            </div>
          </div>
          <div className="list-content">
            <img className="icon" src={scale} alt="scale icon" />
            <div className="text-content">
              <h2>{result.scale.header}</h2>
              <p>{result.scale.description}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  ) : (
    <p>Loading</p>
  );
};

export default Platform;
