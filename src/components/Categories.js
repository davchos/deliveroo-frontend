import "./css/Categories.css";
import Category from "./Category";
import Panier from "./Panier";
import { useState } from "react";
import PanierNonVide from "./PanierNonVide";

const Categories = ({ categories }) => {
  const [states, setStates] = useState({
    empty: true,
    items: {},
    total: 0,
  });
  console.log("categories" + categories);
  return (
    <div className="content">
      <div className="category-meals category">
        {categories
          .filter((elem) => {
            console.log("in cat: " + typeof elem.meals);
            return elem.meals.length !== 0;
          })
          .map((ele, index) => {
            return (
              <div key={index}>
                <Category
                  category={ele}
                  states={states}
                  setStates={setStates}
                />
              </div>
            );
          })}
      </div>
      {states.empty ? (
        <Panier />
      ) : (
        <PanierNonVide states={states} setStates={setStates} />
      )}
    </div>
  );
};
export default Categories;
