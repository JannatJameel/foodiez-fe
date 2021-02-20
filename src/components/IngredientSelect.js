import { useState } from "react";
import { useSelector } from "react-redux";
// Styling
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const IngredientSelect = ({ ingredient, ingredients, setIngredients }) => {
  const _ingredients = useSelector((state) => state.ingredient.ingredients);
  const foundIngredient = _ingredients.find(
    (ingrd) => ingrd.id === ingredient.id
  );

  const [state, setState] = useState(false);

  const handleChange = (event) => {
    setState(!state);
    if (ingredients.find((ingrd) => ingrd === foundIngredient.id)) {
      setIngredients(
        ingredients.filter((ingId) => ingId !== foundIngredient.id)
      );
    } else {
      setIngredients([...ingredients, foundIngredient.id]);
    }
  };

  if (!foundIngredient) return <p>Wait for Ingredients</p>;
  return (
    <FormGroup row>
      <FormControlLabel
        control={
          <Checkbox checked={state} onChange={handleChange} color="primary" />
        }
        label={foundIngredient.name}
      />
    </FormGroup>
  );
};

export default IngredientSelect;
