import "./Header.css";
import { images } from "../../constants";
import { SubHeading } from "../../components";

const Header = () => (
  <div className="app_header app_wrapper section_padding" id="Home">
    <div className="app_wrappper_info">
      <SubHeading title="Chase Exquisite Flavours." />
      <h1 className="app_header_h1">The Key to Fine Foods</h1>
      <p className="p_opensans" style={{ margin: "2rem 0" }}>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum nostrum rem facilis, natus blanditiis quis repellendus neque ab a consequuntur expedita dolorem hic voluptates doloribus aspernatur distinctio cum soluta illo.
      </p>
      <button type="button" className="custom_button">
        Explore Menu
      </button>
    </div>
    <div className="app_wrapper_img">
      <img src={images.welcome} alt="header img"/>
    </div>
  </div>
);

export default Header;
