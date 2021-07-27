import "./css/Restaurant.css";
import Description from "./Description";
import Categories from "./Categories";
import Panier from "./Panier";

const Restaurant = ({ data }) => {
  console.log(data);
  const { restaurant, categories } = data;
  console.log("In Restaur data: " + restaurant);
  console.log("cate :" + categories[0].name);
  return (
    <div className="restaurant">
      <Description restaurant={restaurant} />
      <Categories categories={categories} />
    </div>
  );
};
export default Restaurant;
