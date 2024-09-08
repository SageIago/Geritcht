import { images } from "../../constants";
import "./Navbar.css";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="app_navbar">
      <div className="app_navbar_logo">
        <img src={images.gericht} alt="GERICHT" />
      </div>
      <ul className="app_navbar_links">
        <li className="p_opensans">
          <a href="#Home">Home</a>
        </li>
        <li className="p_opensans">
          <a href="#About">About</a>
        </li>
        <li className="p_opensans">
          <a href="#Menu">Menu</a>
        </li>
        <li className="p_opensans">
          <a href="#Awards">Awards</a>
        </li>
        <li className="p_opensans">
          <a href="#Contact">Contact</a>
        </li>
      </ul>
      <div className="app_navbar_login">
        <a href="#Login" className="p_opensans">
          Login | Register
        </a>
        <div />
        <a href="/" className="p_opensans">
          Book A Table
        </a>
      </div>
      <div className="app_navbar_small-screen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          // style={{marginTop: "10px"}}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="app_navbar_small-screen_overlay flex_center slide_bottom">
            <MdOutlineRestaurantMenu
              className="overlay_close"
              fontSize={27}
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app_navbar_small-screen_links">
              <li className="p_opensans">
                <a href="#Home">Home</a>
              </li>
              <li className="p_opensans">
                <a href="#About">About</a>
              </li>
              <li className="p_opensans">
                <a href="#Menu">Menu</a>
              </li>
              <li className="p_opensans">
                <a href="#Awards">Awards</a>
              </li>
              <li className="p_opensans">
                <a href="#Contact">Contact</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
