import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { createRecipe } from "../store/actions/recipeActions";
// Styling
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import AddIcon from "@material-ui/icons/Add";
import CloseIcon from '@material-ui/icons/Close';
import Container from '@material-ui/core/Container';
// Components
import CategoryAccordion from "./CategoryAccordion";


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
    color: "black",
  },
  bar: {
    backgroundColor: theme.palette.warning.light,
  }
}));

const RecipeForm = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const categories = useSelector((state) => state.category.categories);

  const [recipe, setRecipe] = useState({
    name: "",
    image: "",
    method: "",
  });

  const [ingredients, setIngredients] = useState([]);

  const handleChange = (event) => {
    setRecipe({ ...recipe, [event.target.name]: event.target.value });
  };

  const handleImage = (event) => {
    setRecipe({ ...recipe, image: event.target.files[0] });
  };

  const handleSubmit = () => {
    dispatch(createRecipe({ ...recipe, ingredients: ingredients }));
    history.push(`/recipes`);
  };

  const handleCancel = () => {
    history.push(`/recipes`);
  };

  return (
    <div>
      <AppBar position="static" className={classes.bar}>
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            New Recipe
          </Typography>
          <Box mr={2}>
            <Button
              variant="outlined"
              endIcon={<CloseIcon />}
              onClick={handleCancel}
            >
              Cancel
            </Button>
          </Box>
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
      <Container>
        <form className={classes.root} noValidate autoComplete="off">
          <div>
            <Box mt={5} mb={5}>
              <TextField
                required
                id="outlined-required"
                label="Recipe Name"
                variant="outlined"
                value={recipe.name}
                name="name"
                onChange={handleChange}
              />
            </Box>
            <Box mb={2}>
              <TextField
                id="outlined-flexible"
                type="file"
                fullWidth
                variant="outlined"
                onChange={handleImage}
                helperText="upload an image for the recipe"
              />
            </Box>
            <Box mb={5}>
              <TextField
                id="outlined-multiline-flexible"
                label="Recipe Method"
                multiline
                rowsMax={10}
                value={recipe.method}
                onChange={handleChange}
                variant="outlined"
                name="method"
                helperText="write the recipe steps seperated by ,"
              />
            </Box>
          </div>
        </form>
        <Box ml={2} mr={2}>
          <h5>Select the required ingredients:</h5>
          {categories.map((category) => (
            <Box mb={3}>
              <CategoryAccordion
                category={category}
                ingredients={ingredients}
                setIngredients={setIngredients}
              />
            </Box>
          ))}
        </Box>
      </Container>
    </div>
  );
};

export default RecipeForm;