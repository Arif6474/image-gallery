import ImageCard from "./ImageCard/ImageCard";
import ImageGalleryTop from "./ImageGalleryTop/ImageGalleryTop";
import initialData from "./initialData";
import './ImageGallery.css'

function ImageGallery() {

  const {images} =initialData

  return (
    <div className="image-gallery">
      <div className="container">
        <ImageGalleryTop />
        <div className="image-group">
          {images?.map((item) => (
            <ImageCard key={item.id} item={item}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ImageGallery;
