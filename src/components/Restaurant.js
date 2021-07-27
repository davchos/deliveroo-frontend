import "./css/Restaurant.css";
import Description from "./Description";
import Categories from "./Categories";

const Restaurant = ({ data }) => {
  const { restaurant, categories } = data;
  return (
    <div className="restaurant">
      <Description restaurant={restaurant} />
      <Categories categories={categories} />
    </div>
  );
};
export default Restaurant;
