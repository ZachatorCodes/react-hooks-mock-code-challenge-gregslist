import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [itemList, setItemList] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((r) => r.json())
      .then((data) => {
        setItemList(data);
      });
  }, []);

  function handleDeleteItem(deletedItem) {
    const updatedItems = itemList.filter((item) => item.id !== deletedItem.id);
    setItemList(updatedItems);
  }

  const itemsToDisplay = itemList.filter((listing) => {
    return listing.description.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="app">
      <Header onSearch={setSearch} />
      <ListingsContainer
        itemList={itemsToDisplay}
        onDeleteItem={handleDeleteItem}
      />
    </div>
  );
}

export default App;
