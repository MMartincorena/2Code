import NavListDrawer from "./NavListDrawer";
import Drawer from "@mui/material/Drawer";
import { useState } from "react";
import { AppBar, Toolbar, IconButton, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import { Box } from "@mui/system";
import { generalNavLinks } from "./DatosNavbar";
import "./styles/Navbar.scss";
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
            height: "100px",
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: "0 5% ",
            borderBottom:" 2px solid #00C7FF",
            boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.35)",
          }}
        >
          <img
            src="../../src/assets/static/images/UTEC_LOGO.png"
            alt="Description of the image"
            className="logo_UTEC"
          />
          <Toolbar>
            <IconButton
              color="inherit"
              fontSize="large"
              onClick={() => setOpen(true)}
              sx={{
                display: {
                  xs: "flex",
                  sm: "none",
                },
              }}
              edge="start"
            >
              <MenuIcon
                fontSize="large"
                sx={{
                  padding: "0",
                  margin: "0",
                }}
              />
            </IconButton>

            {/* esta linea hace que todo el contenido de box se ajuste al tamaño de la pantalla */}
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {generalNavLinks.map((item) => (
                <Button
                  sx={{
                    marginLeft: "20px",
                  }}
                  color="inherit"
                  key={item.title}
                  component="a"
                  href={item.path}
                >
                  <span style={{ marginRight: "8px", fontSize: "18px" }}>{item.icon}</span>
                  <span style={{ fontSize: "18px" }}>{item.title}</span>
                  
                </Button>
              ))}
            </Box>
          </Toolbar>
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
          <NavListDrawer navLinks={generalNavLinks} />
        </Drawer>
      </ThemeProvider>
    </>
  );
};

export default Navbar;
