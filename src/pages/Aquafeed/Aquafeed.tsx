import "./Aquafeed.scss";
import Nav from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { useFetch } from "../../hooks/useFetch";
import { AquafeedResult } from "./utils";

const Aquafeed = () => {
  const { data } = useFetch<Array<any>>(
    `${process.env.REACT_APP_API_PAGES}=aquafeed`
  );
  const result: AquafeedResult = data && data?.length > 0 && data[0].acf;

  return result ? (
    <>
      <Nav />
      <div className="aquafeed">
        <div className="content">
          <img src={result.image.url} alt="aquafeed" />
          <div className="text">
            <h3>USE CASE</h3>
            <h2>{result.header}</h2>
            <p>{result.description}</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  ) : (
    <></>
  );
};

export default Aquafeed;
