import "./AboutUs.css";
import { images } from "../../constants";

const AboutUs = () => (
  <div className="app_about_us flex_center app_bg section_padding" id="About">
    <div className="app_about_us-overlay flex_center">
      <img src={images.G} alt="Letter G" />
    </div>
    <div className="app_about_us-content flex_center">
      <div className="app_about_us-content_about">
        <h1 className="headtext_Inter">About Us</h1>
        <img src={images.spoon} alt="Spoon" />
        <p className="p_opensans">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni
          nostrum consectetur ad libero labore nisi, iste fugit aliquid deleniti
          recusandae?
        </p>
        <button type="button" className="custom_button">
          Know More
        </button>
      </div>
      <div className="app_about_us-content_knife flex_center">
        <img src={images.knife} alt="about_knife" />
      </div>
      <div className="app_about_us-content_history flex_center">
        <h1 className="headtext_Inter">Our History</h1>
        <img src={images.spoon} alt="Spoon" />
        <p className="p_opensans">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni
          nostrum consectetur ad libero labore nisi, iste fugit aliquid deleniti
          recusandae?
        </p>
        <button type="button" className="custom_button">
          Know More
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
