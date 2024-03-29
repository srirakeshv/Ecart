import React, { useEffect, useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const SnackBar = ({ open }) => {
  const [open1, setOpen1] = useState(false);

  useEffect(() => {
    setOpen1(open);
  }, [open]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen1(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
      <Snackbar
        open={open1}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Typed Item is not in store"
        action={action}
      />
    </div>
  );
};

export default SnackBar;
