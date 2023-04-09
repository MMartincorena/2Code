import NavListDrawer from "./NavListDrawer";
import Drawer from "@mui/material/Drawer";
import { useState } from "react";
import { AppBar, Toolbar, IconButton, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import { Box } from "@mui/system";
import { generalNavLinks } from "./DatosNavbar";
import "./Navbar.scss";
import { useNavigate } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  /* Hook el cual */
  const navigate = useNavigate();

  const onLogout = () => {
    navigate("/login", {
      replace: true,
    });
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#343A40",
      },
    },
  });

  /* HACER */
  /* Arreglar la forma del boton de icono de desplegar opciones */

  return (
    <>
      <ThemeProvider theme={theme}>
        <AppBar
          position="fixed"
          sx={{
            height: "130px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: "8px",
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              size="large"
              onClick={() => setOpen(true)}
              /* hace que el icono de hamburguesa desaparezca segun el tamaño de pantalla */
              sx={{
                display: {
                  xs: "flex",
                  sm: "none",
                },
                border: "solid #fff 0.8px",
                borderRadius: "5px",
                height: "40px",
              }}
              edge="start"
            >
              <MenuIcon />
            </IconButton>

            {/* esta linea hace que todo el contenido de box se ajuste al tamaño de la pantalla */}
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {generalNavLinks.map((item) => (
                <Button
                  color="inherit"
                  key={item.title}
                  component="a"
                  href={item.path}
                >
                  {item.title}
                </Button>
              ))}
              <Button
                className="buttonStyle"
                sx={{
                  color: "black",
                  marginLeft: "20px",
                  backgroundColor: "white",
                  margin: "5px",
                  border: "solid #fff 2px",
                }}
                onClick={onLogout}
              >
                Logout
              </Button>
            </Box>
          </Toolbar>
          <img
            src="../../src/assets/static/images/UTEC_LOGO.png"
            alt="Description of the image"
            className="logo_UTEC"
          />
        </AppBar>
        <Drawer
          open={open}
          anchor="left"
          onClose={() => setOpen(false)}
          sx={{
            display: {
              xs: "flex",
              sm: "none",
            },
          }}
        >
          <NavListDrawer
            navLinks={generalNavLinks}
            /*             sx={{ backgroundColor: "#343A40", top: "200px" }}
             */
          />
        </Drawer>
      </ThemeProvider>
    </>
  );
};

export default Navbar;
