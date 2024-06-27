import { generalNavLinks } from "./DatosNavbar";
import { Box } from "@mui/system";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
} from "@mui/material";

const NavListDrawer = () => {
  return (
    <Box
      sx={{
        width: "300px",
        height: "100%",
        backgroundColor: "#343A40",
        color: "#fff",
        paddingTop: "20%",
        top: "40%",
      }}
    >
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
