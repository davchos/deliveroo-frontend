import "./css/Panier.css";

const Panier = (props) => {
  return (
    <div className="panier">
      <button className="title">Valider mon panier</button>
      <div className="panierVide">Votre panier est vide</div>
    </div>
  );
};

export default Panier;
