import Drawer from "@mui/material/Drawer";
import { useState } from "react";
import { AppBar, Toolbar, IconButton, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "./styles/SidebarUsers.scss";
import { useNavigate } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const generalNavLinks = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
];

const SidebarUsers = () => {
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
        <AppBar
          position="fixed"
          sx={{
            height: "100px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: "8px",
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
              size="large"
              onClick={() => setOpen(true)}
              sx={{
                display: {
                  xs: "flex",
                  sm: "none",
                  padding: "0px",
                },
              }}
              edge="start"
            >
              <MenuIcon sx={{ fontSize: "35px" }} />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer
          open={open}
          anchor="left"
          onClose={() => setOpen(false)}
          sx={{
            display: {
              xs: "flex",
              sm: "flex",
            },
          }}
        >
          <NavListDrawer navLinks={generalNavLinks} />
        </Drawer>
      </ThemeProvider>
    </>
  );
};

export default SidebarUsers;
