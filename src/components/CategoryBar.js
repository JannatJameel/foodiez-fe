// Styling
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// Components
import CategoryButton from "./CategoryButton";
import IngredientButton from "./IngredientButton";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    fontWeight: "bold",
    marginLeft: 22
  },
}));

const CategoryBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            Categories
          </Typography>
          <CategoryButton/>
          <IngredientButton/>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default CategoryBar;