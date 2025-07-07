import React from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

function MUIAlert() {
  return (
    <div>
      <Alert sx={{ width: "300px" }} severity="info">
        Info message
      </Alert>
      <Alert
        sx={{ width: "400px", marginTop: "5px" }}
        severity="error"
        variant="outlined"
      >
        error message
      </Alert>
      <Alert
        sx={{ width: "500px", marginTop: "5px" }}
        severity="warning"
        variant="filled"
      >
        warning message
      </Alert>
      <Alert sx={{ width: "600px", marginTop: "5px" }} severity="success">
        <AlertTitle>Succes</AlertTitle> succes message
      </Alert>
    </div>
  );
}

export default MUIAlert;
