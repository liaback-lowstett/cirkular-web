import { HomeResult } from "../../pages/Home/utils";
import "./AdvisoryBoard.scss";

const AdvisoryBoard: React.FC<HomeResult["advisoryBoard"]> = ({
  advisoryBoardHeader,
  advisoryBoardText,
}) => {
  return (
    <section className="advisoryboard">
      <h2>{advisoryBoardHeader}</h2>
      <span dangerouslySetInnerHTML={{ __html: advisoryBoardText }}></span>
    </section>
  );
};

export default AdvisoryBoard;
