import { useState } from "react";
// Styling
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useDispatch } from "react-redux";
import { createIngredient } from "../store/actions/ingredientActions";
import AddIcon from '@material-ui/icons/Add';



const IngredientButton = ({ categoryId }) => {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [ingredient, setIngredient] = useState({
    categoryId: categoryId,
    name: "",
    image: "",
  });
  console.log(ingredient);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAdd = () => {
    console.log(ingredient);
    dispatch(createIngredient(ingredient));
    handleClose();
  };

  const handleChange = (event) => {
    setIngredient({
      ...ingredient,
      [event.target.name]: event.target.value,
      categoryId: categoryId,
    });
  };

  const handleImage = (event) =>
    setIngredient({ ...ingredient, image: event.target.files[0] });

  return (
    <div>
      <Box ml={2} mr={4}>
        <Button variant="outlined" onClick={handleClickOpen} startIcon={<AddIcon/>}>
          Ingredient
        </Button>
      </Box>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add New Ingredient</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter a name and upload an image for your new ingredient.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Ingredient"
            type="text"
            fullWidth
            name="name"
            value={ingredient.name}
            onChange={handleChange}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Image"
            type="file"
            fullWidth
            name="image"
            onChange={handleImage}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleAdd} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default IngredientButton;