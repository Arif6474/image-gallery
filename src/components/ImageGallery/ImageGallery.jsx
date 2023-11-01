import ImageCard from "./ImageCard/ImageCard";
import ImageGalleryTop from "./ImageGalleryTop/ImageGalleryTop";
import './ImageGallery.css'
function ImageGallery() {
  return (
    <div className="image-gallery">
      <div className="container">
        <ImageGalleryTop />
        <div className="image-group">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
            <ImageCard key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ImageGallery;
