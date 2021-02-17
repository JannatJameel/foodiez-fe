// Styling
import { makeStyles } from '@material-ui/core/styles';
// Components
import IngredientCard from "./IngredientCard";

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      overflow: 'hidden',
      marginLeft: 14
    },
    gridList: {
      width: 1000,
      height: 450,
    },
  }));

const IngredientList = ({ingredients, key}) => {
    const classes = useStyles();
    if(!ingredients) {return <p>Waiting for ingredients</p>};
    return (
        <div className={classes.root}>
          {ingredients.map(ingredient => <IngredientCard ingredient={ingredient} key={ingredient.id}/>)}
        </div>

    );
};

export default IngredientList;