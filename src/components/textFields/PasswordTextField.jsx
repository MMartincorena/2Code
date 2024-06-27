import React from "react";
import { Grid, TextField } from "@mui/material";

const PasswordTextField = ({ value, onChange, onBlur, touched, errors }) => {
  return (
    <Grid>
      <TextField
        fullWidth
        margin="normal"
        size="small"
        id="password"
        name="password"
        label="Contraseña"
        type="password"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        error={touched && Boolean(errors)}
        helperText={touched && errors}
        autoComplete="current-password"
        variant="standard"
      />
    </Grid>
  );
};

export default PasswordTextField;
