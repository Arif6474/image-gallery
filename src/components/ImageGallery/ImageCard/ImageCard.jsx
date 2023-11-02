/* eslint-disable react/prop-types */
import { Draggable } from "react-beautiful-dnd";
import "./ImageCard.css";

function ImageCard({ item, index }) {
  return (
    <Draggable draggableId={item.id.toString()} index={index}>
      {(provided) => (
        <div
          className="single-image"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <div>
            <input type="checkbox" />
          </div>
          <img src={item?.image} alt="" />
        </div>
      )}
    </Draggable>
  );
}

export default ImageCard;
