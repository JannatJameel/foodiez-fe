import { Link } from "react-router-dom";
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
    marginLeft: "2.6%",
    marginTop: "1.5%",
  },
  gridList: {
    width: 1000,
    height: 450,
  },
}));

const IngredientList = () => {
  const classes = useStyles();
  const recipes = useSelector((state) => state.recipe.recipes);

  return (
    <div className={classes.root}>
      {recipes.map((recipe) => (
        <Link to={`/recipes/${recipe.slug}`}>
          <Card item={recipe} key={recipe.id} />
        </Link>
      ))}
    </div>
  );
};

export default IngredientList;