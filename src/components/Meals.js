import "./css/Meals.css";

const Meals = ({ meals, index }) => {
  return (
    <div className="category">
      {meals.map((elem, index) => {
        return (
          <div key={index} /*className="category-meals"*/>
            <div className="category-meal">
              <div className="category-meal-text">
                {elem.title && <h3>{elem.title}</h3>}
                {elem.description && <p>{elem.description}</p>}
                {elem.price && <span>{elem.price}</span>}
              </div>
              {elem.picture && (
                <img
                  className="category-meal-image"
                  src={elem.picture}
                  alt="meal"
                />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Meals;
