import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Toolbar, { styles as toolbarStyles } from './Toolbar';
// Components
import AppBar from './AppBar';


const styles = (theme) => ({
  title: {
    fontSize: 24,
  },
  placeholder: toolbarStyles(theme).root,
  toolbar: {
    justifyContent: 'space-between',
  },
  left: {
    flex: 1,
  },
  leftLinkActive: {
    color: theme.palette.common.white,
  },
  right: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  rightLink: {
    fontSize: 16,
    color: theme.palette.common.white,
    marginLeft: theme.spacing(3),
  },
  linkSecondary: {
    color: theme.palette.secondary.main,
  },
  root: {
    backgroundColor: theme.palette.primary.main
  }
});

const HomeBar = (props) => {
  const { classes } = props;

  return (
    <div>
      <AppBar position="fixed" className={classes.root}>
        <Toolbar className={classes.toolbar}>
          <div className={classes.left} />
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            className={classes.title}
            style={{textDecoration: "none", color: "#FFF"}}
            href="/"
          >
            {'Everyone Can Cook'}
          </Link>
          <div className={classes.right}>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              className={classes.rightLink}
              style={{textDecoration: "none", color: "#FFF"}}
              href="/recipes"
            >
              {'Recipes'}
            </Link>
            <Box mr={4}>
              <Link
                variant="h6"
                underline="none"
                className={clsx(classes.rightLink, classes.linkSecondary)}
                style={{textDecoration: "none", color: "#ff3366"}}
                href="/ingredients"
              >
                {'Ingredients'}
              </Link>
            </Box>
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.placeholder} />
    </div>
  );
}

HomeBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomeBar);