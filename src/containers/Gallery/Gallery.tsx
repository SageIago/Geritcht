import "./Gallery.css";

import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";

import { galleryImages } from "../../constants";
import { SubHeading } from "../../components";
import { useRef } from "react";

const Gallery = () => {
  const scrollRef = useRef<HTMLDivElement>(null);



  //SCROLLS NOT YET FIXED (TODO THAT WITH CHATGPT)

  const scroll = (direction: string) => {
    const { current } = scrollRef;
    
    // let changeFrom = current?.scrollLeft.toString()
    if (direction === "left") {
      current?.scroll(0, 300)
      
    } else {
      current?.scroll(660, 300)
    }
  };

  return (
    <div className="app_Gallery flex_center">
      <div className="app_Gallery_Content">
        <SubHeading title="Instagram" />
        <h1 className="headtext_Inter">Photo Gallery</h1>
        <p className="p_opensans" style={{ color: "#AAA", marginTop: "2rem" }}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius, iste?
          At excepturi voluptatum culpa eum vitae atque corporis veniam quo.
        </p>
        <button type="button" className="custom_button">
          View More
        </button>
      </div>

      <div className="app_Gallery_Images">
        <div className="app_Gallery_Image-Container" ref={scrollRef}>
          {galleryImages.map((Images, index) => (
            <div
              className="app_Gallery_Image_Card flex_center"
              key={`gallery_image + ${index + 1}`}
            >
              <img src={Images} alt={`Gallery + ${index}`} />
              <BsInstagram className="Gallery_Image-Icon" />
            </div>
          ))}
          <div className="app_Gallery_Arrows">
            <BsArrowLeftShort
              className="Gallery_Arrow-Icon"
              onClick={() => scroll("left")}
            />
            <BsArrowRightShort
              className="Gallery_Arrow-Icon"
              onClick={() => scroll("right")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
