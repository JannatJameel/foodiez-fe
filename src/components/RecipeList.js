// Styling
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
// Components
import Card from "./ItemCard";

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

const IngredientList = () => {
  const classes = useStyles();

  const recipes = useSelector((state) => state.recipe.recipes);

  if (!recipes) {
    return <p>Waiting for recipes</p>;
  }
  return (
    <div className={classes.root}>
      {recipes.map((recipe) => (
        <Card item={recipe} key={recipe.id} />
      ))}
    </div>
  );
};

export default IngredientList;