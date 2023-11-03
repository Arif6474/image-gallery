import { DragDropContext, Droppable } from "react-beautiful-dnd";
import ImageCard from "./ImageCard/ImageCard";
import ImageGalleryTop from "./ImageGalleryTop/ImageGalleryTop";
import initialData from "./initialData";
import "./ImageGallery.css";
import { useState } from "react";

function ImageGallery() {
  const { images } = initialData;
  const [items, setItems] = useState(images);
  const [selectedItems, setSelectedItems] = useState([]);
  console.log(
    "🚀 ~ file: ImageGallery.jsx:12 ~ ImageGallery ~ selectedItems:",
    selectedItems
  );

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const reorderedItems = [...items];
    const [movedItem] = reorderedItems.splice(result.source.index, 1);
    reorderedItems.splice(result.destination.index, 0, movedItem);

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
  // const { images } = initialData;
  // const [items, setItems] = useState(images);
  // const [handleSelectedImages, setHandleSelectedImages] = useState([])

  // async function onDragEnd(result) {
  //   const { destination, source } = result;

  //   if (
  //     destination.droppableId === source.droppableId &&
  //     destination.index === source.index
  //   ) {
  //     return;
  //   }
  //   const reorderedItems = Array.from(items);
  //   const [removed] = reorderedItems.splice(source.index, 1);
  //   reorderedItems.splice(destination.index, 0, removed);

  //   setItems(reorderedItems);
  // }

  // function handleSelectedImages(item) {

  // }

  return (
    <div className="image-gallery">
      <div className="container">
        <ImageGalleryTop
          handleDeleteSelected={handleDeleteSelected}
          selectedItems={selectedItems}
        />
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="bleh">
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
