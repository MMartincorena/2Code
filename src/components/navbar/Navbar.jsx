/** @jsxImportSource @emotion/react */
import NavListDrawer from "./NavListDrawer";
import Drawer from "@mui/material/Drawer";
import { useState } from "react";
import { AppBar, Toolbar, IconButton, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Box } from "@mui/system";
import { generalNavLinks } from "./DatosNavbar";
import { useNavigate } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import {
  appBarStyles,
  iconButtonStyles,
  menuIconStyles,
  navButtonsStyles,
  navButtonStyles,
  navButtonTextStyles,
  logoStyles
} from "./styles/NavbarStyles";

const Navbar = () => {
  const [open, setOpen] = useState(false);

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

  return (
    <>
      <ThemeProvider theme={theme}>
        <AppBar position="fixed" css={appBarStyles}>
          <img
            src="../../src/assets/static/images/UTEC_LOGO.png"
            alt="Description of the image"
            css={logoStyles}
          />
          <Toolbar>
            <IconButton
              color="inherit"
              fontSize="large"
              onClick={() => setOpen(true)}
              css={iconButtonStyles}
              edge="start"
            >
              <MenuIcon fontSize="large" css={menuIconStyles} />
            </IconButton>

            <Box css={navButtonsStyles}>
              {generalNavLinks.map((item) => (
                <Button
                  color="inherit"
                  key={item.title}
                  component="a"
                  href={item.path}
                  css={navButtonStyles}
                >
                  <span css={navButtonTextStyles}>{item.icon}</span>
                  <span css={navButtonTextStyles}>{item.title}</span>
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
