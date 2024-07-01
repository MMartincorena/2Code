import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";

const SwitchModes = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.reducerMui.modeApp);

  return (
    <Button color="primary" variant="contained">
      Cambiar a modo {mode === "light" ? "oscuro" : "claro"}
    </Button>
  );
};

export default SwitchModes;
