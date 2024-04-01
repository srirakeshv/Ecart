import React, { useEffect, useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import Slide from "@mui/material/Slide";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function SlideTransition(props) {
  return <Slide {...props} direction="up" />;
}

export default function TransitionsSnackbar({ set, setNumber }) {
  const [state, setState] = useState({
    open: false,
    Transition: SlideTransition,
    horizontal: "center",
    vertical: "bottom",
  });
  const [phonenumber, setPhonenumber] = useState("");

  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      open: set,
    }));
    setPhonenumber(setNumber);
  }, [set, setNumber]);

  const handleClose = () => {
    setState({
      ...state,
      open: false,
    });
  };

  const { horizontal, vertical, Transition } = state;

  return (
    <div>
      <Snackbar
        open={state.open}
        onClose={handleClose}
        TransitionComponent={Transition}
        message={
          <span>
            <CheckCircleIcon className="mr-4 text-green-600" />
            Verification code sent to {phonenumber}
          </span>
        }
        key={state.Transition.name}
        autoHideDuration={4000}
        anchorOrigin={{ vertical, horizontal }}
      />
    </div>
  );
}
