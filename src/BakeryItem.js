export function BakeryItem({item, addCounter}) {
  return (<div className="BakeryItem">
      <h2>{item.name}</h2>
      <p>Price: {item.price}</p>
      <img src={item.image} width="400px"></img>
      <button onClick={() => addCounter(item)}>Add</button>
              </div>);
}