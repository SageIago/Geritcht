import { SubHeading } from "../../components";
import { images } from "../../constants";

const FindUs = () => {
  return (
    <div className="app_bg app_wrapper section_padding" id="Contact">
      <div className="app_wrapper_info">
        <SubHeading title="Contact" />
        <h1 className="headtext_Inter" style={{marginBottom:"3rem"}}>Find Us</h1>
        <div className="app_wrapper_content">
            <p className="p_opensans">Lorem ipsum dolor sit amet.</p>
            <p className="p_Inter" style={{color: "var(--color-golden)", margin: "2rem 0"}}>Opening Hours</p>
            <p className="p_opensans">Mondays to Fridays: 8:00am - 5:00pm</p>
            <p className="p_opensans">Saturdays to Sundays: 12:00pm - 5:00pm</p>
          </div>
          <button type="button" className="custom_button" style={{marginTop: "2rem"}}>View Us</button>
      </div>

      <div className="app_wrapper_img">
        <img src={images.findus} alt="Find Us" />
      </div>
    </div>
  );
};

export default FindUs;
