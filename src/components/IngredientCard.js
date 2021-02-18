import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import GridListTileBar from "@material-ui/core/GridListTileBar";

// import CardActions from '@material-ui/core/CardActions';
// import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    width: 300,
    margin: 20,
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 22,
  },
  titleBar: {
    background:
      "linear-gradient(to top, grey 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
});

const IngredientCard = ({ ingredient }) => {
  const classes = useStyles();

  if (!ingredient) {
    return <p>Waiting for ingredient</p>;
  }
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={ingredient.name}
          height="250"
          image={ingredient.image}
          title={ingredient.name}
        />
        <GridListTileBar
          classes={{
            root: classes.titleBar,
            title: classes.title,
          }}
          title={ingredient.name}
        />
      </CardActionArea>

      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions> */}
    </Card>
  );
};

export default IngredientCard;
