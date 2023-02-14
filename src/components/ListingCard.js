import React, { useState } from "react";

function ListingCard(item) {
  const { description, image, location, onDeleteItem } = item;
  const [isFavorite, setIsFavorite] = useState(false);

  function handleButtonClick() {
    setIsFavorite((isFavorite) => !isFavorite);
  }

  function handleDelete() {
    fetch(`http://localhost:6001/listings/${item.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => onDeleteItem(item));
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {isFavorite ? (
          <button
            onClick={handleButtonClick}
            className="emoji-button favorite active"
          >
            ★
          </button>
        ) : (
          <button onClick={handleButtonClick} className="emoji-button favorite">
            ☆
          </button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDelete} className="emoji-button delete">
          🗑
        </button>
      </div>
    </li>
  );
}

export default ListingCard;
