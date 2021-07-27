import "./css/Item.css";

const Item = ({ elem, states, setStates, index }) => {
  console.log(states);
  const handlePlus = (event) => {
    let copyStates = { ...states };
    copyStates.items[elem.id]["qty"]++;
    copyStates.total += Number(copyStates.items[elem.id]["price"]);
    setStates(copyStates);
  };
  const handleMoins = (event) => {
    let copyStates = { ...states };
    if (elem.qty === 1) {
      delete copyStates["items"][elem.id];
      if (Object.keys(copyStates.items).length === 0) {
        copyStates.empty = true;
      }
    } else {
      copyStates["items"][elem.id]["qty"]--;
      copyStates.total -= Number(copyStates.items[elem.id]["price"]);
    }
    setStates(copyStates);
  };
  return (
    <div className="item">
      <div key={index}>
        <i onClick={handlePlus} className="fas fa-plus fa-xs"></i>

        <span>{elem.qty}</span>

        <i onClick={handleMoins} className="fas fa-minus fa-xs"></i>

        <p>{elem.title}</p>
      </div>
      <span>{elem.price}</span>
    </div>
  );
};
export default Item;
