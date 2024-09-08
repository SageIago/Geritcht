import { SubHeading } from "../../components";
import { awards, AwardsType, images } from "../../constants";
import AwardCard from "./AwardCard";
import "./Laurels.css";

const Laurels = () => {
  return (
    <div className="app_bg app_wrapper section_padding" id="Awards">
      <div className="app_wrapper_info">
        <SubHeading title="Awards and Recognitions" />
        <h1 className="headtext_Inter">Our Laurels</h1>

        <div className="app_laurels_awards">
          {awards.map((award: AwardsType) => (
            <AwardCard
              key={award.subtitle + award.title}
              subtitle="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
              imgUrl={award.imgUrl}
              title={award.title}
            />
          ))}
        </div>

        <div className="app_wrapper_img">
          <img src={images.laurels} alt="Laurels" />
        </div>
      </div>
    </div>
  );
};

export default Laurels;
