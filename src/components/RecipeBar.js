// Styling
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import AddIcon from "@material-ui/icons/Add";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    fontWeight: "bold",
    marginLeft: "1.5%",
  },
}));

const RecipeBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            Recipes
          </Typography>
          <Link to="/recipes/new">
            <Box mr={4}>
              <Button variant="outlined" startIcon={<AddIcon />}>
                Recipe
              </Button>
            </Box>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default RecipeBar;
