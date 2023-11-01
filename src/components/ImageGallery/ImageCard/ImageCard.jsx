import image from "../../../../src/assets/images/image-1.webp";
import "./ImageCard.css";

function ImageCard() {
  return (
    <div className="single-image">
      <div>
        <input type="checkbox"  />
      </div>
      <img src={image} alt="" />
    </div>
  );
}

export default ImageCard;
