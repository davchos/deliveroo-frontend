import "./css/PanierNonVide.css";
import Item from "./Item";

const PanierNonVide = ({ states, setStates }) => {
  const sousTotal = () => {
    let soustotal = 0;
    Object.entries(states.items).map(([key, elem], index) => {
      soustotal += elem.qty * elem.price;
    });
    return soustotal.toFixed(2);
  };
  const tot = () => {
    let tot = 0;
    Object.entries(states.items).map(([key, elem], index) => {
      tot += elem.qty * elem.price; // total + 2.5 plus simple ....
    });
    return (tot + 2.5).toFixed(2);
  };
  return (
    <div className="paniernonvide">
      <button className="title">Valider mon panier</button>
      <div>
        {Object.entries(states.items).map(([cle, elem], index) => {
          console.log(" In loop " + elem);
          return (
            <Item
              elem={elem}
              states={states}
              setStates={setStates}
              index={index}
            />
          );
        })}
      </div>
      <div className="item">
        <span>Sous-total</span> <span>{sousTotal()}</span>
      </div>
      <div className="item">
        <span>Frais de livraison</span> <span>2,5</span>
      </div>

      <div className="item">
        <span>Total</span> <span>{tot()} </span>
      </div>
    </div>
  );
};
export default PanierNonVide;
