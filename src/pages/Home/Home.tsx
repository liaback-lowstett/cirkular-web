import "./Home.scss";
import Nav from "../../components/Nav/Nav";
import Hero from "../../sections/Hero/Hero";
import Platform from "../../sections/Platform/Platform";
import Usecases from "../../sections/Usecases/Usecases";
import Quote from "../../sections/Quote/Quote";
import Team from "../../sections/Team/Team";
import AdvisoryBoard from "../../sections/AdvisoryBoard/AdvisoryBoard";
import Footer from "../../components/Footer/Footer";

const Home = () => {

  return (
    <>
      <Nav/>
      <div className="home">
        <Hero />
        <Platform />
        <Usecases />
        <Quote />
        <Team />
        <AdvisoryBoard />
      </div>
      <Footer />
    </>
  );
}

export default Home;
