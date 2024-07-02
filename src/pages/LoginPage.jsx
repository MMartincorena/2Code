import React, { useEffect } from "react";
import { Grid, Button } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

import "./styles/LoginPage.scss";
import { EmailTextField, PasswordTextField } from "../components/textFields";
/* import ThemeSwitcher from "../components/switch/ThemeSwitcher";
 */
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
      <div className="forma"></div>
      <div className="dataBoxBackground">
        <div className="recuatro">
          <div className="imagenLogin"></div>
          <div className="dataBox">
            <div className="fondoLogo">
              <img
                className="logo"
                src="../../src/assets/static/images/logo_UTEC_LetraNegra.png"
                alt="logo UTEC"
              />
            </div>
{/*             <ThemeSwitcher />
 */}            {/* TittleBar */}
            <div className="tituloPrincipal">
              <div className="fondoPrincipal">
                <div className="textoTituloPrincipal"> Bienvenido </div>
              </div>
            </div>

            {/* ----------- FORMULARIO ----------- */}
            <div className="formulario">
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
                  sx={{ marginTop: "16px" }}
                >
                  Ingresar
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
