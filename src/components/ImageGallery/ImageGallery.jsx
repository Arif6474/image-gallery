import { DragDropContext, Droppable } from "react-beautiful-dnd";
import ImageCard from "./ImageCard/ImageCard";
import ImageGalleryTop from "./ImageGalleryTop/ImageGalleryTop";
import initialData from "./initialData";
import "./ImageGallery.css";
import { useState } from "react";

function ImageGallery() {
  const { images } = initialData;
  const [items, setItems] = useState(images);

  async function onDragEnd(result) {
    const { destination, source } = result;

    if (
      !destination ||
      (destination.droppableId === source.droppableId &&
        destination.index === source.index)
    ) {
      return;
    }
    const reorderedItems = Array.from(items);
    const [removed] = reorderedItems.splice(source.index, 1);
    reorderedItems.splice(destination.index, 0, removed);

    setItems(reorderedItems);
  }

  return (
    <div className="image-gallery">
      <div className="container">
        <ImageGalleryTop />
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="bleh">
            {(provided) => (
              <div
                className="image-group"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {items?.map((item, index) => (
                  <ImageCard key={item.id} item={item} index={index} />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  );
}

export default ImageGallery;
