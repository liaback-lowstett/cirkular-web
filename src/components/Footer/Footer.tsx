import "./Footer.scss";
import "../../variables.scss";

import logo from "../../assets/logo_w.png";

const Footer = () => {
  return (
    <section className="footer">
      <div className="contact-container">
        <h4>Get in touch!</h4>
        <div className="contact-list">
          <ul>
            <li>Scheelevägen 22</li>
            <li>Box 719</li>
            <li>223 63 Lund</li>
          </ul>
          <ul>
            <li>Email info@cirkular.bio</li>
            <li>Cirkulär is part of the Aventure Group</li>
            <li>
              <a
                href="https://aventureab.com/"
                target="_blank"
                rel="noreferrer"
              >
                www.aventureab.com
              </a>
            </li>
          </ul>
          <img className="logo" src={logo} alt="logo" />
        </div>
      </div>
    </section>
  );
};

export default Footer;
