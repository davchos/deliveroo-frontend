import "./css/Description.css";

const Description = ({ restaurant }) => {
  // console.log(restaurant.);
  return (
    <div style={{ background: "white" }}>
      <div className="description container">
        <div className="description-text">
          <h1>{restaurant.name} </h1>
          <p>{restaurant.description}</p>
        </div>

        <img
          className="description-image"
          src={restaurant.picture}
          alt="test"
        />
        {/* </div> */}
      </div>
    </div>
  );
};
export default Description;
