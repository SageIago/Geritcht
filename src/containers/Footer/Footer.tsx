import { FiFacebook, FiInstagram, FiTwitch, FiTwitter, FiYoutube } from "react-icons/fi";
import { FooterOverlay, Newsletter } from "../../components";
import { images } from "../../constants";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="app_footer section_padding">
      <FooterOverlay />
      <Newsletter />

      <div className="app_footer_links">
        <div className="app_footer_links-contact">
          <h1 className="app_footer_headtext">Contact Us</h1>
          <p className="p_opensans">No.21 UdoUdoma Avenue, Uyo. Nigeria</p>
          <p className="p_opensans">123-456-789</p>
          <p className="p_opensans">070-800-527-61</p>
        </div>
        <div className="app_footer_links-logo">
          <img src={images.gericht} alt="Gericht Logo" />
          <p className="p_opensans">
            "The Best Way to Find Yourself is to Lose Yourself in the Service of
            Others"
          </p>
          <img
            src={images.spoon}
            alt=""
            className="spoon_img"
            style={{ marginTop: "15px" }}
          />
          <div className="app_footer_links-logo_icons">
            <FiFacebook />
            <FiInstagram />
            <FiYoutube />
            <FiTwitch />
            <FiTwitter />
          </div>
        </div>
        <div className="app_footer_links-work">
          <h1 className="app_footer_headtext">Working Hours</h1>
          <p className="p_opensans">Mondays to Fridays:</p>
          <p className="p_opensans">8:00am to 5:00pm</p>
          <p className="p_opensans">Saturdays to Sundays:</p>
          <p className="p_opensans">12:00pm to 3:00pm</p>
        </div>
      </div>
      <div className="app_footer_copyright">
        <p className="p_opensans">2021 Gericht. All Rights Reserved...</p>
      </div>
    </div>
  );
};

export default Footer;
