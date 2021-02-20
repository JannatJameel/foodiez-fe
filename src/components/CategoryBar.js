// Styling
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
// Components
import CategoryButton from "./CategoryButton";
import IngredientButton from "./IngredientButton";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.warning.light,
  },
  title: {
    flexGrow: 1,
    fontWeight: "bold",
    marginLeft: "1.5%",
    color: "black"
  },
}));

const CategoryBar = ({ categoryId }) => {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            Ingredients
          </Typography>
          <CategoryButton />
          <IngredientButton categoryId={categoryId} />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default CategoryBar;
