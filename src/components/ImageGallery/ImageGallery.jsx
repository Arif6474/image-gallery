import { DragDropContext, Droppable } from "react-beautiful-dnd";
import ImageCard from "./ImageCard/ImageCard";
import ImageGalleryTop from "./ImageGalleryTop/ImageGalleryTop";
import initialData from "./initialData";
import { useState } from "react";
import ImageUploadCard from "./ImageUploadCard/ImageUploadCard";
import "./ImageGallery.css";

function ImageGallery() {
  const { products } = initialData;
  const [items, setItems] = useState(products);
  const [selectedItems, setSelectedItems] = useState([]);

  const onDragEnd = (result) => {
   const {destination, source} =result
    if (!destination) return;

    const reorderedItems = [...items];
    const [movedItem] = reorderedItems.splice(source.index, 1);
    reorderedItems.splice(destination.index, 0, movedItem);
    setItems(reorderedItems);
  };

  const handleSelectItem = (itemId) => {
    setSelectedItems((prevSelectedItems) => {
      if (prevSelectedItems.includes(itemId)) {
        return prevSelectedItems.filter((id) => id !== itemId);
      } else {
        return [...prevSelectedItems, itemId];
      }
    });
  };

  const handleDeleteSelected = () => {
    const updatedItems = items.filter(
      (item) => !selectedItems.includes(item.id)
    );
    setItems(updatedItems);
    setSelectedItems([]);
  };

  return (
    <div className="image-gallery">
      
        <ImageGalleryTop
          handleDeleteSelected={handleDeleteSelected}
          selectedItems={selectedItems}
        />
        <div className="container_fluid">
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="image-gallery" direction="horizontal">
            {(provided) => (
              <div
                className="image-group"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {items?.map((item, index) => (
                  <ImageCard
                    key={item.id}
                    item={item}
                    index={index}
                    handleSelectItem={handleSelectItem}
                  />
                ))}
                <ImageUploadCard />
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
