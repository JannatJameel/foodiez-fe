import { useParams, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
// Styling
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '../home/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// Components
import Loading from "../Loading";


const styles = (theme) => ({
  root: {
    display: 'flex',
    // backgroundColor: theme.palette.warning.light,
    overflow: 'hidden',
  },
  container: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(15),
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
  },
  title: {
    marginBottom: theme.spacing(14),
  },
  number: {
    fontSize: 24,
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.secondary.main,
    fontWeight: theme.typography.fontWeightMedium,
  },
  image: {
    height: 55,
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180,
    opacity: 0.7,
  },
  button: {
    marginTop: theme.spacing(8),
  },
});

const RecipeMethod = (props) => {
  const { classes } = props;
  const {recipeSlug} = useParams();
  const recipes = useSelector((state) => state.recipe.recipes);
  const recipe = recipes.find((recipe) => recipe.slug === recipeSlug);

  // if(!recipe) return <Loading/>;
  if(!recipe) return <Redirect to = "/recipes"/>;
  const method = recipe.method.split(",");
  return (
    <section className={classes.root}>
      <Container className={classes.container}>
          <Box textAlign="center">
            <Typography variant="h4" marked="center" className={classes.title} component="h2">
            Directions
            </Typography>
          </Box>
        <div>
        <List>
            {method.map((step, i) =>
            <>
            <Typography className={classes.number}>Step {i+1}</Typography>
            <ListItem>
                <Typography variant="h5">
                  {step}
                </Typography>
            </ListItem>
            </>
            )}
        </List>
        </div>
      </Container>
    </section>
  );
}

RecipeMethod.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeMethod);