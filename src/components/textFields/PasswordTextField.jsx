import React, { useState } from "react";
import {
  Grid,
  TextField,
  IconButton,
  InputAdornment,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const PasswordTextField = ({ value, onChange, onBlur, touched, errors }) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPasswordClick = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Grid>
      <TextField
        fullWidth
        variant="outlined"
        margin="normal"
        size="small"
        id="password"
        name="password"
        label="Contraseña"
        type={showPassword ? "text" : "password"}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        error={touched && Boolean(errors)}
        helperText={touched && errors}
        autoComplete="current-password"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleShowPasswordClick}>
                {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Grid>
  );
};

export default PasswordTextField;