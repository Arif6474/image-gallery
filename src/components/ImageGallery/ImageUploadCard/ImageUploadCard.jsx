import image from "../../../assets/images/image-1.webp";
import uploadImg from '../../../assets/images/photo.png'
import './ImageUploadCard.css'

function ImageUploadCard() {
  return (
    <div className='image-upload-wrapper'>
      <img className='hidden-img' src={image} alt="thumb" />
      <div className="image-upload">
        <input type="file" id="imgUpload" accept="image/*" />
        <label htmlFor="imgUpload">
          <img className="upload-thumb" src={uploadImg} alt="Upload Thumb" />
          <span>add Images</span>
        </label>
      </div>
    </div>
  )
}

export default ImageUploadCard