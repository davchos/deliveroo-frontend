import "./css/Header.css";

const Header = (props) => {
  return (
    <div className="header">
      <div className="container">
        <img
          alt="Fichier:Deliveroo logo.svg"
          src="//upload.wikimedia.org/wikipedia/fr/thumb/f/f7/Deliveroo_logo.svg/519px-Deliveroo_logo.svg.png"
          decoding="async"
          width="150px"
          height="50px"
          srcset="//upload.wikimedia.org/wikipedia/fr/thumb/f/f7/Deliveroo_logo.svg/779px-Deliveroo_logo.svg.png 1.5x, //upload.wikimedia.org/wikipedia/fr/thumb/f/f7/Deliveroo_logo.svg/1038px-Deliveroo_logo.svg.png 2x"
        ></img>
      </div>
    </div>
  );
};
export default Header;
