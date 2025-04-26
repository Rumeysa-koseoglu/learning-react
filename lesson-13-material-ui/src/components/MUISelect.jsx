import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { TextField } from "@mui/material";

function MUISelect() {
  const [currency, setCurrency] = useState("");
  console.log(currency);
  return (
    <div>
      <FormControl sx={{ width: "150px" }}>
        <InputLabel>Currency</InputLabel>
        <Select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          <MenuItem value="TRY">Turkish Lira</MenuItem>
          <MenuItem value="USD">US Dollar</MenuItem>
          <MenuItem value="EUR">Euro</MenuItem>
        </Select>
      </FormControl>
      {/** we can do the same thing with textfield; */}

      <TextField value={currency} onChange={(e) => setCurrency(e.target.value)} sx={{width: '150px'}} label="currency" select>
        <MenuItem value="TRY">Turkish Lira</MenuItem>
        <MenuItem value="USD">US Dollar</MenuItem>
        <MenuItem value="EUR">Euro</MenuItem>
      </TextField>
    </div>
  );
}

export default MUISelect;
