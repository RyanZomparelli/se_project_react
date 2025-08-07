import "../ItemCard/ItemCard.css";

function ItemCard({ clothingItem, handleItemCardClick }) {
  return (
    <li className="clothing__card">
      <p className="clothing__card-title">{clothingItem.name}</p>
      <img
        src={clothingItem.link}
        alt={clothingItem.name}
        className="clothing__card-image"
        //When passing arguments to a callback function it's necessary to wrap
        // them in another function to avoid calling them immediately.
        //Using Anonymous Arrow Functions creates a new function on every render
        // so in larger applications this could cause performace issues and it
        // would be preferrable to create a proper wrapper function in the body
        // of the component that we would pass here as a 'refrence' as opposed to
        // another function.
        onClick={() => handleItemCardClick(clothingItem)}
      />
    </li>
  );
}

export default ItemCard;
