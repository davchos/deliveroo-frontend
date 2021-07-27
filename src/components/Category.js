import "./css/Category.css";
import Meals from "./Meals";

const Category = ({ category, states, setStates }) => {
  // console.log("Meals" + meals);
  const { name, meals } = category;
  console.log("Meals" + meals);
  return (
    <div className="category">
      {<h2>{name}</h2>}
      <Meals meals={meals} states={states} setStates={setStates} />
    </div>
  );
};

export default Category;
