import "./SubHeading.css"
import { images } from "../../constants"

interface Props {
  title: string
}

const SubHeading = ({title}: Props) => {
  return (
    <div style={{marginBottom: "1rem"}}>
      <p className="p_Inter">{title}</p>
      <img src={images.spoon} alt="spoon" className="spoon_img"/>
    </div>
  )
}

export default SubHeading