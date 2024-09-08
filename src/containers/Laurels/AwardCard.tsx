import { AwardsType } from "../../constants"
import "./Laurels.css"

const AwardCard = ({imgUrl, title, subtitle}: AwardsType) => {
  return (
    <div className="app_laurels_awards-card">
       <img src={imgUrl} alt="RespectiveImage" />
       <div className="app_laurel_awards_card-content">
        <p className="p_Inter" style={{color: "#DCCA87"}}>{title}</p>
        <p className="p_Inter">{subtitle}</p>
       </div>
    </div>
  )
}

export default AwardCard