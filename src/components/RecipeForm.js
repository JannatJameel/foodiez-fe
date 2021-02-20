import { useDispatch, useSelector } from "react-redux";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import AddIcon from "@material-ui/icons/Add";
// Components
import CategoryAccordion from "./CategoryAccordion";
import { useState } from "react";
import { createRecipe } from "../store/actions/recipeActions";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      width: "100%",
    },
    margin: theme.spacing(2),
    flexGrow: 1,
  },
  column: {
    margin: "0.9rem",
    flexBasis: "33.33%",
  },
  title: {
    flexGrow: 1,
    fontWeight: "bold",
    marginLeft: "1.5%",
  },
}));

const RecipeForm = () => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const categories = useSelector((state) => state.category.categories);

  const [recipe, setRecipe] = useState({
    name: "",
    image: "",
    method: "",
  });

  const [ingredients, setIngredients] = useState([]);

  const x = "2,4";
  console.log(x.split(","));

  const handleChange = (event) => {
    setRecipe({ ...recipe, [event.target.name]: event.target.value });
  };

  const handleImage = (event) => {
    setRecipe({ ...recipe, image: event.target.files[0] });
  };

  const handleSubmit = () => {
    console.log({ ...recipe, ingredients: ingredients });
    dispatch(createRecipe({ ...recipe, ingredients: ingredients }));
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            New Recipe
          </Typography>
          <Box mr={4}>
            <Button
              variant="outlined"
              endIcon={<AddIcon />}
              onClick={handleSubmit}
            >
              Create
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <TextField
            required
            id="outlined-required"
            label="Recipe Name"
            variant="outlined"
            name="name"
            value={recipe.name}
            onChange={handleChange}
          />
          <div className={classes.column}>
            <input
              accept="image/*"
              className={classes.input}
              id="icon-button-file"
              type="file"
              onChange={handleImage}
            />
          </div>
          <TextField
            id="outlined-multiline-flexible"
            label="Method"
            multiline
            rowsMax={10}
            name="method"
            value={recipe.method}
            onChange={handleChange}
            variant="outlined"
            helperText="write the recipe steps seperated by ,"
          />
        </div>
      </form>
      {categories.map((category) => (
        <CategoryAccordion
          category={category}
          ingredients={ingredients}
          setIngredients={setIngredients}
        />
      ))}
    </div>
  );
};

export default RecipeForm;
