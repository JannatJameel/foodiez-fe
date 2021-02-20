import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from './MainButton';
import Typography from './Typography';

const styles = (theme) => ({
  root: {
    display: 'flex',
    backgroundColor: theme.palette.secondary.light,
    overflow: 'hidden',
  },
  container: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(15),
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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

const Instructions = (props) => {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <Typography variant="h4" marked="center" className={classes.title} component="h2">
          How it works
        </Typography>
        <div>
          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <div className={classes.number}>1.</div>
                <img
                  src="https://www.flaticon.com/svg/vstatic/svg/985/985515.svg?token=exp=1613814130~hmac=aa370725f81460c3899f5d7314e11226"
                  alt="suitcase"
                  className={classes.image}
                />
                <Typography variant="h5" align="center">
                  Choose your ingredients from a list of categories. You can also add a new category with even more ingredients!
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <div className={classes.number}>2.</div>
                <img
                  src="https://www.flaticon.com/svg/vstatic/svg/3448/3448102.svg?token=exp=1613814186~hmac=1d1dec966e4f98386272bc0fe6355fd1"
                  alt="graph"
                  className={classes.image}
                />
                <Typography variant="h5" align="center">
                  Add the steps required for others to receate your magical recipe. Now get on it and cook some yummy food!
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <div className={classes.number}>3.</div>
                <img
                  src="https://www.flaticon.com/svg/vstatic/svg/1847/1847210.svg?token=exp=1613814234~hmac=d2b5627988ea478a4fb084e9885e8571"
                  alt="clock"
                  className={classes.image}
                />
                <Typography variant="h5" align="center">
                  Keep it fun, enjoy the messy process, and put on some music. Then treat yourself with a delicious plate!
                </Typography>
              </div>
            </Grid>
          </Grid>
        </div>
        <Button
          color="secondary"
          size="large"
          variant="contained"
          className={classes.button}
          component="a"
          style={{ color: '#FFF' }}
          href="/"
        >
          Get started
        </Button>
      </Container>
    </section>
  );
}

Instructions.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Instructions);