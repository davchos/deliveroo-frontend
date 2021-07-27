import "./css/Category.css";
import Meals from "./Meals";

const Category = ({ category }) => {
  // console.log("Meals" + meals);
  const { name, meals } = category;
  console.log("Meals" + meals);
  return (
    <div className="category">
      {<h2>{name}</h2>}
      <Meals meals={meals} />
    </div>
  );
};

//       elem.meals.map((elem, index) => {
//         return (
//           <div key={index} className="category-meals">
//             <div className="category-meal">
//               <div className="category-meal-text">
//                 <h3>{elem.name}</h3>
//                 <p>Meal descriptio</p>
//                 <span>prix</span>
//               </div>
//               <div className="category-meal-image"> image</div>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };
export default Category;
