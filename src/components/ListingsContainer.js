import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ itemList, onDeleteItem }) {
  return (
    <main>
      <ul className="cards">
        {itemList.map((item) => {
          return (
            <ListingCard
              key={item.id}
              id={item.id}
              description={item.description}
              image={item.image}
              location={item.location}
              onDeleteItem={onDeleteItem}
            />
          );
        })}
      </ul>
    </main>
  );
}

export default ListingsContainer;
