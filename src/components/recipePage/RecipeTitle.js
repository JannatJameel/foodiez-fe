import { useParams, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
// Styling
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '../home/Typography';
// Components
import Loading from "../Loading";


const styles = (theme) => ({
  root: {
    marginTop: theme.spacing(10),
    marginBottom: 0,
    display: 'flex',
  },
  cardWrapper: {
    zIndex: 1,
  },
  card: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: theme.palette.warning.main,
    padding: theme.spacing(8, 3),
    marginTop: 40,
  },
  cardContent: {
    maxWidth: 400,
  },
  imagesWrapper: {
    position: 'relative',
  },
  image: {
    position: 'absolute',
    top: -28,
    left: -28,
    right: 0,
    bottom: 0,
    width: '100%',
    maxWidth: 600,
    maxHeight: 500,
  },
  frame: {
    border: '4px solid currentColor',
    borderRadius: 0,
    height: 'auto',
    padding: theme.spacing(2, 5),
  }
});

const RecipeTitle = (props) => {
  const { classes } = props;
  const {recipeSlug} = useParams();
  const recipes = useSelector((state) => state.recipe.recipes);
  const recipe = recipes.find((recipe) => recipe.slug === recipeSlug);

  // if(!recipe) return <Loading/>;
  if(!recipe) return <Redirect to = "/recipes"/>;
  return (
    <Container className={classes.root} component="section">
      <Grid container>
        <Grid item xs={12} md={6} className={classes.cardWrapper}>
          <div className={classes.card}>
              <Box ml={5} mr={5} mt={2}>
                <Typography variant="h2" component="h2" gutterBottom className={classes.frame}>
                    {recipe.name}
                </Typography>
              </Box>
          </div>
        </Grid>
        <Grid item xs={12} md={6} className={classes.imagesWrapper}>
          <Hidden smDown>
            <img
              src={recipe.image}
              alt="call to action"
              className={classes.image}
            />
          </Hidden>
        </Grid>
      </Grid>
    </Container>
  );
}

RecipeTitle.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeTitle);