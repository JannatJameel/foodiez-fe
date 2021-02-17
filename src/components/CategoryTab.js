import { useState } from "react";
import { useSelector } from "react-redux";
// Styling
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
// Components
import IngredientList from "./IngredientList"
import CategoryBar from "./CategoryBar"


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
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const a11yProps = (index) => {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    height: "20%",
    backgroundColor: theme.palette.background.paper,
  },
}));

const CategoryTab = () => {
    const categories = useSelector(state => state.category.categories);
    const classes = useStyles();
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className={classes.root} position="sticky">
        <CategoryBar/>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
        {categories.map((category, i) => <Tab label={category.name} {...a11yProps(i)} key={i}/>)}
        </Tabs>
      </AppBar>
        
        <TabPanel value={value} index={value}>
            <IngredientList ingredients={categories[value].ingredients}/>
        </TabPanel>
        {/* <TabPanel value={value} index={categories.length}>
            Hellooo
        </TabPanel> */}
    </Box>
  );
}

export default CategoryTab;