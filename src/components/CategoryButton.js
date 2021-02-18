import { useState } from "react";
// Styling
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useDispatch } from "react-redux";
import { createCategory } from "../store/actions/categoryActions";

const CategoryButton = () => {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState({
    name: "",
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAdd = () => {
    console.log(category);
    dispatch(createCategory(category));
    handleClose();
  };

  const handleChange = (event) => {
    setCategory({ ...category, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add Category
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add New Category</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter a category for your new ingredients category.
          </DialogContentText>
          <br />
          <TextField
            autoFocus
            margin="dense"
            id="category"
            label="Category"
            type="text"
            fullWidth
            name="name"
            value={category.name}
            onChange={handleChange}
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

export default CategoryButton;
