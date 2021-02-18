import { useSelector } from "react-redux";
// Styling
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// Components 
import IngredientSelect from "./IngredientSelect";


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const CategoryAccordion = ({category}) => {
  const categories = useSelector((state) => state.category.categories);
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`panel1a-content`}
          id={`panel1a-header`}
        >
          <Typography className={classes.heading}>{category.name}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {category.ingredients.map(ingredient =>
              <IngredientSelect ingredient={ingredient} category={category}/>
              )}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default CategoryAccordion;