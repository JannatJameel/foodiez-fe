import { useState } from "react";
import { useSelector } from "react-redux";
// Styling
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


const IngredientSelect = ({ingredient, category}) => {
  const ingredients = useSelector((state) => state.ingredient.ingredients);
  const foundIngredient = ingredients.find((ingrd) => ingrd.id === ingredient.id);

  const [state, setState] = useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  if(!foundIngredient) return <p>Wait for Ingredients</p>;
  return (
    <FormGroup row>
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedB}
            onChange={handleChange}
            name="checkedB"
            color="primary"
          />
        }
        label={foundIngredient.name}
      /> 
    </FormGroup>
  );
};

export default IngredientSelect;