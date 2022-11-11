import "./App.css";
import { useState } from "react";
import {BakeryItem} from "./BakeryItem.js"
import bakeryData from "./assets/bakery-data.json";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [counter, setCounter] = useState(0);
  const [allItems, setAllItems] = useState([]);

  function handleClick(item) {
    setCounter(counter + item.price);
    setAllItems(allItems.concat(item.name));
  }


  return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

      {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
        <BakeryItem key={index} item={item} addCounter={handleClick}/> // replace with BakeryItem component
      ))}

      <div>
        <h2>Cart</h2>
        {/* TODO: render a list of items in the cart */}
          <p>Cart Items: {allItems.join(", ")}</p>
          <p>Total: {counter}</p>
      </div>
    </div>
  );
}

export default App;
