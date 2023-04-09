import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
} from "@mui/material";

import { generalNavLinks } from "./DatosNavbar";

import { Box } from "@mui/system";

const NavListDrawer = () => {
  return (
    <Box sx={{ width: 250 }}>
      <nav>
        <List>
          {generalNavLinks.map((item) => (
            <ListItem disablePadding key={item.title}>
              <ListItemButton component="a" href={item.path}>
                <ListItemIcon sx={{ marginLeft: "20px" }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText>{item.title} </ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </nav>
    </Box>
  );
};

export default NavListDrawer;
