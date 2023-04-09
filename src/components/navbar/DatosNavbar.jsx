import AbcIcon from "@mui/icons-material/Abc";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import AddTaskIcon from "@mui/icons-material/AddTask";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";

export const generalNavLinks = [
  { title: "Empresas", path: "/#Empresa", icon: <WorkIcon sx={{ color: '#fff' }}/> },
  { title: "Estudiantes", path: "/#Estudiante", icon: <SchoolIcon sx={{ color: '#fff' }}/> },
  { title: "Login", path: "/login", icon: <AddTaskIcon sx={{ color: '#fff' }}/> },
];

export const studentNavLinks = [
  { title: "Home", path: "/", icon: <AbcIcon /> },
  {
    title: "Login",
    path: "/login",
    icon: <AddLocationIcon sx={{ color: "#fff" }} />,
  },
  { title: "Algo", path: "#", icon: <AddTaskIcon /> },
];

export const businessNavLinks = [
  { title: "Home", path: "/", icon: <AbcIcon /> },
  { title: "Login", path: "/login", icon: <AddLocationIcon /> },
  { title: "Algo", path: "#", icon: <AddTaskIcon /> },
];
