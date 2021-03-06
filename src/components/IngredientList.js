// Styling
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
// Components
import ItemCard from "./ItemCard";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    overflow: "hidden",
    marginLeft: "1%",
  },
  gridList: {
    width: 1000,
    height: 450,
  },
}));

const IngredientList = ({ categoryId }) => {
  const classes = useStyles();

  const ingredients = useSelector(
    (state) => state.ingredient.ingredients
  ).filter((ingredient) => ingredient.categoryId === categoryId);

  if (!ingredients) {
    return <p>Waiting for ingredients</p>;
  }
  return (
    <div className={classes.root}>
      {ingredients.map((ingredient) => (
        <ItemCard item={ingredient} key={ingredient.id} />
      ))}
    </div>
  );
};

export default IngredientList;