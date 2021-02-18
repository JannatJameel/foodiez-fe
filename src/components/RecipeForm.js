import { useSelector } from "react-redux";
// Components
import CategoryAccordion from "./CategoryAccordion";

const RecipeForm = () => {
  const categories = useSelector((state) => state.category.categories);

  return (
    <div>
      {categories.map(category => 
          <CategoryAccordion category={category}/>
      )}
    </div>
  )
};

export default RecipeForm;