import React from "react";
import { Grid, TextField } from "@mui/material";

const EmailTextField = ({ value, onChange, onBlur, touched, errors }) => {
  return (
    <Grid>
      <TextField
        fullWidth
        size="small"
        margin="normal"
        type="email"
        id="email"
        name="email"
        label="Correo electrónico"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        error={touched && Boolean(errors)}
        helperText={touched && errors}
        autoComplete="current-email"
        variant="standard"

      />
    </Grid>
  );
};

export default EmailTextField;
