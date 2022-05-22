import Nav from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Accordion from "../../components/Accordion/Accordion";

import "./Career.scss";
import { useFetch } from "../../hooks/useFetch";
import { CareerResult } from "./utils";

const Career = () => {
  const { data } = useFetch<Array<any>>(
    `${process.env.REACT_APP_API_PAGES}=career`
  );
  const result: CareerResult = data && data?.length > 0 && data[0].acf;

  return result ? (
    <>
      <Nav />
      <div className="career">
        <section className="content">
          <section className="intro">
            <h1>{result.header}</h1>
            <span dangerouslySetInnerHTML={{ __html: result.body }}></span>
          </section>
          <section className="culture">
            <h3>Our culture</h3>
            <p>
              As a company, we stand for honesty, transparency, and openness, to
              foster a work environment that has a sense of community and
              purpose in everything we do.
            </p>
            <div className="accordion">
              {Object.values(result.culture).map(
                ({ header, description }) =>
                  header &&
                  description && (
                    <Accordion
                      key={header}
                      title={header}
                      content={description}
                    />
                  )
              )}
            </div>
          </section>
        </section>
      </div>
      <Footer />
    </>
  ) : (
    <></>
  );
};

export default Career;
