/* eslint-disable react/prop-types */
import "./ImageGalleryTop.css";
function ImageGalleryTop({ handleDeleteSelected, selectedItems }) {

  function numberOfItems(number) {
    switch (number) {
      case 1:
        return "1 File";

      default:
        return number + " Files";
    }
  }

  return (
    <div className="image-gallery-top">
      <div className="container_fluid">
        {selectedItems?.length > 0 ? (
          <div className="image-gallery-top-content">
            <div>
              <input type="checkbox" checked />
              <label> {numberOfItems(selectedItems?.length)} Selected</label>
            </div>
            <div className="delete-btn">
              <button onClick={handleDeleteSelected}>
                <span>Delete {selectedItems?.length > 1 ? 'Files' : 'File'}</span>
              </button>
            </div>
          </div>
        ) : (
          <h1>Gallery</h1>
        )}
      </div>
    </div>
  );
}

export default ImageGalleryTop;
