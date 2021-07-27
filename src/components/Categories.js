import "./css/Categories.css";
import Category from "./Category";

const Categories = ({ categories }) => {
  // console.log("categories" + categories);
  return (
    <div
      className="category-meals container"
      // style={{ background: "white" }}
      // key="index"
    >
      {categories
        .filter((elem) => {
          console.log("in cat: " + typeof elem.meals);
          return elem.meals.length !== 0;
        })
        .map((ele, index) => {
          // console.log(index);
          return (
            <div key={index}>
              <Category category={ele} />
            </div>
          );
        })}
    </div>
  );
};
export default Categories;
