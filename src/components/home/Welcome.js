import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import Button from './MainButton';
import Typography from './Typography';
import WelcomeLayout from './WelcomeLayout';

const backgroundImage =
  'https://blog.bestbuy.ca/wp-content/uploads/2019/10/o-KITCHEN-COOKING-facebook.jpg';

const styles = (theme) => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: '#7fc7d9', // Average color of the background image.
    backgroundPosition: 'center',
  },
  button: {
    minWidth: 200,
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
});

const Welcome = (props) => {
  const { classes } = props;

  return (
    <WelcomeLayout backgroundClassName={classes.background}>
      {/* Increase the network loading priority of the background image. */}
      <img style={{ display: 'none' }} src={backgroundImage} alt="increase priority" />
      <Box mt={12}>
        <Typography color="inherit" align="center" variant="h2" marked="center">
            Welcome dear home cooks
        </Typography>
      </Box>
        <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
          {"Food is the most precious thing."}
          <br/>
          {"Get creative with it, it will not disappoint."} 
        </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        className={classes.button}
        component="a"
        href="/recipes/new"
        style={{ color: '#FFF' }}
      >
        Create A Recipe
      </Button>
      {/* <Typography variant="body2" color="inherit" className={classes.more}>
        Discover the experience
      </Typography> */}
    </WelcomeLayout>
  );
}

Welcome.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Welcome);