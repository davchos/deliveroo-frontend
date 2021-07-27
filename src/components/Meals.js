import "./css/Meals.css";

const Meals = ({ meals, index, states, setStates }) => {
  return (
    <div className="category">
      {meals.map((elem, index) => {
        const handleClick = (event) => {
          console.log(elem);
          let copyStates = { ...states };
          copyStates.empty = copyStates.empty && false;
          console.log(copyStates);
          if (copyStates.items.hasOwnProperty(elem.id)) {
            copyStates.items[elem.id]["qty"]++;
          } else {
            copyStates.items[elem.id] = {
              qty: 1,
              price: elem.price,
              title: elem.title,
              id: elem.id,
            };
          }
          copyStates.total += Number(elem.price);

          console.log(copyStates);
          setStates(copyStates);
        };
        return (
          <div key={index}>
            <div className="category-meal">
              <div className="category-meal-text">
                {elem.title && <h3 onClick={handleClick}>{elem.title}</h3>}
                {elem.description && (
                  <p onClick={handleClick}>{elem.description}</p>
                )}
                {elem.price && (
                  <span onClick={handleClick}>{elem.price} €</span>
                )}
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
