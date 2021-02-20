// Styling
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
// Components
import RecipeList from "./RecipeList";
import RecipeBar from "./RecipeBar";


const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    height: "20%",
    backgroundColor: theme.palette.background.paper,
  },
}));

const RecipeTab = () => {
  const classes = useStyles();

  return (
    <>
    <Box className={classes.root} position="sticky">
      <RecipeBar />
      <RecipeList />
    </Box>
    </>
  );
};

export default RecipeTab;
