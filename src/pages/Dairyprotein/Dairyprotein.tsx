import "./Dairyprotein.scss";
import Nav from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { DairyproteinResult } from "./utils";
import { useFetch } from "../../hooks/useFetch";

const Dairyprotein = () => {
  const { data } = useFetch<Array<any>>(
    `${process.env.REACT_APP_API_PAGES}=dairy-protein`
  );
  const result: DairyproteinResult = data && data?.length > 0 && data[0].acf;

  return result ? (
    <>
      <Nav />
      <div className="dairyprotein">
        <div className="content">
          <img src={result.image.url} alt="fishfeed" />
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

export default Dairyprotein;
