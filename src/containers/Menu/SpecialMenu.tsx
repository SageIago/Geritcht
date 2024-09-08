import { SubHeading, MenuItem } from "../../components";
import "./SpecialMenu.css";
import {
  cocktails,
  CockTailType,
  images,
  wines,
  WineType,
} from "../../constants";

const SpecialMenu = () => {
  return (
    <div className="app_Special_Menu flex_center section_padding" id="Menu">
      <div className="app_Special_Menu-Title">
        <SubHeading title="Menu that fits your Palette" />
        <h1 className="headtext_Inter">Today's Special</h1>
      </div>

      <div className="app_Special_Menu-menu">
        {/* WINE MENU */}
        <div className="app_Special_Menu-menu_wine flex_center">
          <p className="app_Special_Menu_Heading">Wines & Beer</p>
          <div className="app-Special_Menu_menu-items">
            {wines.map((wines: WineType) => (
              <MenuItem
                title={wines.title}
                tags={wines.tags}
                price={wines.price}
                key={wines.title + wines.index}
              />
            ))}
          </div>
        </div>

        {/* IMAGE */}
        <div className="app_Special_Menu-menu_img">
          <img src={images.menu} alt="Menu Image" />
        </div>

        {/* COCKTAIL MENU */}
        <div className="app_Special_Menu-menu_cocktails flex_center">
          <p className="app_Special_Menu_Heading">Cocktails</p>
          <div className="app-Special_Menu_menu-items">
            {cocktails.map((cocktails: CockTailType) => (
              <MenuItem
                key={cocktails.tags + cocktails.index}
                price={cocktails.price}
                tags={cocktails.tags}
                title={cocktails.title}
              />
            ))}
          </div>
        </div>
      </div>

      <div style={{ marginTop: "15px" }}>
        <button type="button" className="custom_button">
          View More
        </button>
      </div>
    </div>
  );
};

export default SpecialMenu;
