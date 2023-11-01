/* eslint-disable react/prop-types */
import "./ImageCard.css";

function ImageCard({item}) {
  return (
    <div className="single-image">
      <div>
        <input type="checkbox"  />
      </div>
      <img src={item?.image} alt="" />
    </div>
  );
}

export default ImageCard;
