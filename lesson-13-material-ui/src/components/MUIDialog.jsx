import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

function MUIDialog() {
  const [dialogOpen, setDialogOpen] = useState(false);

  const type = {
    YES: "YES",
    NO: "NO",
  };

  const result = (type) => {
    console.log("clicked button is : ", type);

    setDialogOpen(false);
  };

  return (
    <div style={{ margin: "20px 0" }}>
      <Button onClick={() => setDialogOpen(true)}>Dialog</Button>
      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <DialogTitle>Question</DialogTitle>
        <DialogContent>
          <DialogContentText>
            are you sure to delete this file?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => result(type.YES)}>yes</Button>
          <Button onClick={() => result(type.NO)}>no</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default MUIDialog;
