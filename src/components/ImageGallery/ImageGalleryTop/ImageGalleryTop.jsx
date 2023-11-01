import "./ImageGalleryTop.css";
function ImageGalleryTop() {
  return (
    <div className="image-gallery-top">
      {/* <h1>Gallery</h1> */}
      <div className="image-gallery-top-content">
        <div>
          <input type="checkbox"  checked />
          <label> 3 File Selected</label>
        </div>
        <div className="delete-btn">
          <button>
            <span>Delete File</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ImageGalleryTop;
