import React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

function MUIAvatar() {
  return (
    <div>
      <Stack spacing={2}>
        <Avatar
          src="https://randomuser.me/api/portraits/men/60.jpg"
          sx={{ width: 100, height: 100 }}
        />
        <Avatar>R</Avatar>
        <Avatar sx={{ bgcolor: "primary.main" }}>K</Avatar>
        <Avatar sx={{ bgcolor: "green" }}>K</Avatar>
      </Stack>
    </div>
  );
}

export default MUIAvatar;
