import React, { useState } from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

function MUISnackbar() {
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleClick = () => {
    setOpenSnackbar(true);
  };

  const handleClose = () => {
    setOpenSnackbar(false);
  };

  const action = (
    <>
      <Button size="small" color="warning" onClick={handleClose}>
        close
      </Button>
      <IconButton sx={{ color: "#fff" }} onClick={handleClose}>
        <CloseIcon />
      </IconButton>
    </>
  );

  return (
    <div>
      <Button onClick={handleClick}>Open Snackbar</Button>
      <Snackbar
        open={openSnackbar}
        message="note archived !"
        action={action}
        autoHideDuration={3000}
        onClose={handleClose}
      />
    </div>
  );
}

export default MUISnackbar;
