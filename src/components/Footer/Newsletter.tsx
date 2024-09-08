import SubHeading from "../SubHeading/SubHeading"
import "./Newsletter.css"


const Newsletter = () => {
  return (
    <div className="app_Newsletter">
      <div className="app_Newsletter_heading">
        <SubHeading title="Newsletter" />
        <h1 className="headtext_Inter">Subscribe To Our NewsLetter</h1>
        <p className="p_opensans">And Never Miss Our Latest Updates</p>
      </div>

      <div className="app_Newsletter_Input flex_center">
        <input type="email" placeholder="Enter Your Email"/>
        <button type="button" className="custom_button">Subscribe</button>
      </div>
    </div>
  )
}

export default Newsletter