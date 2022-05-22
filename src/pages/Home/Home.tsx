import "./Home.scss";
import Nav from "../../components/Navbar/Navbar";
import Hero from "../../sections/Hero/Hero";
import Platform from "../../sections/Platform/Platform";
import Usecases from "../../sections/Usecases/Usecases";
import Quote from "../../sections/Quote/Quote";
import Team from "../../sections/Team/Team";
import AdvisoryBoard from "../../sections/AdvisoryBoard/AdvisoryBoard";
import Footer from "../../components/Footer/Footer";
import { useFetch } from "../../hooks/useFetch";
import { HomeResult } from "./utils";

const Home = () => {
  const { data } = useFetch<Array<any>>(
    `${process.env.REACT_APP_API_PAGES}=home`
  );
  const result: HomeResult = data && data?.length > 0 && data[0].acf;

  return result ? (
    <>
      <Nav />
      <div className="home">
        <Hero {...result.landing} />
        <Platform {...result.techPlatform} />
        <Usecases {...result.useCase} />
        <Quote {...result.divider} />
        <Team {...result.team} />
        <AdvisoryBoard {...result.advisoryBoard} />
      </div>
      <Footer />
    </>
  ) : (
    <></>
  );
};

export default Home;
