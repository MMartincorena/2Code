import NavListDrawer from "./NavListDrawer";
import Drawer from "@mui/material/Drawer";
import { useState } from "react";
import { AppBar, Toolbar, IconButton, Typography, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import { Box } from "@mui/system";
import { generalNavLinks } from "./DatosNavbar";


const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            color="inherit"
            size="large"
            onClick={() => setOpen(true)}
            /* hace que el icono de hamburguesa desaparezca segun el tamaño de pantalla */
            sx={{ display: { xs: "flex", sm: "none" } }}
            edge="start"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }} color="inherit">
            Logo
          </Typography>
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
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        open={open}
        anchor="left"
        onClose={() => setOpen(false)}
        sx={{ display: { xs: "flex", sm: "none" } }}
      >
        <NavListDrawer navLinks={generalNavLinks} />
      </Drawer>
    </>
  );
};

export default Navbar;
