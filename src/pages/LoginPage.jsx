import React, { useEffect } from "react";
import { Grid, Button } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./styles/LoginPage.scss";
import EmailTextField from "../components/textFields/EmailTextField";
import PasswordTextField from "../components/textFields/PasswordTextField";

const LoginPage = () => {
  useEffect(() => {
    document.title = "Iniciar sesión";
  }, []);

  const { values, handleSubmit, handleChange, handleBlur, touched, errors } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: Yup.object({
        email: Yup.string()
          .email("Dirección de correo electrónico no válida")
          .matches(
            /^[a-zA-Z0-9._%+-]+@estudiantes.utec.edu.uy$/,
            "Ingresa un email válido de UTEC"
          )
          .required("El email es obligatorio"),
        password: Yup.string().required("La contraseña es requerida"),
      }),
      onSubmit: (values) => {
        console.log(values);
      },
    });

  return (
    <div className="backgroundPage">
      <div className="dataBox">
        <div className="firstPanel"></div>
        <div className="secondPanel">
          <form action="" onSubmit={handleSubmit}>
            <Grid>
              <EmailTextField
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                touched={touched.email}
                errors={errors.email}
              />
              <PasswordTextField
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                touched={touched.password}
                errors={errors.password}
              />
            </Grid>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{ marginTop: "1rem" }}
            >
              Ingresar
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
