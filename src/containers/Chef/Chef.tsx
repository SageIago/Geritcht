import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Chef.css";

const Chef = () => {
  return (
    <div className="app_bg app_wrapper section_padding">
      <div className="app_wrapper_img app_wrapper_img-reverse">
        <img src={images.chef} alt="Chef Image" />
      </div>

      <div className="app_wrapper_info">
        <SubHeading title="Chef's Words" />
        <h1 className="headtext_Inter">What We Believe In</h1>

        <div className="app_chef_content">
          <div className="app_chef_content_quote">
            <img src={images.quote} alt="Quote" />
            <p className="p_opensans">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </p>
          </div>
          <p className="p_opensans">
            In tempore alias, et deleniti at obcaecati ex maiores, dicta rerum
            fugiat laudantium illo autem veniam magni qui voluptatem quae
            facilis, aspernatur error voluptate aliquid.
          </p>
        </div>

        <div className="app_chef_signature">
          <p>Kevin Luo</p>
          <p className="p_opensans">Chef and Founder</p>
          <img src={images.sign} alt="Signature" />
        </div>
      </div>
    </div>
  );
};

export default Chef;
