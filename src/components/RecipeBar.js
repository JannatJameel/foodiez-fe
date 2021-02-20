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
    backgroundColor: theme.palette.warning.light,
  },
  title: {
    flexGrow: 1,
    fontWeight: "bold",
    marginLeft: "1.5%",
    color: "black",
  },
}));

const RecipeBar = () => {
  const classes = useStyles();

  return (
    <div >
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            Recipes
          </Typography>
            <Box mr={4}>
            <Link to="/recipes/new" style={{textDecoration: "none"}}>
              <Button variant="outlined" startIcon={<AddIcon />}>
                Recipe
              </Button>
            </Link>
            </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default RecipeBar;
