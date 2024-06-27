import AbcIcon from "@mui/icons-material/Abc";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";

export const generalNavLinks = [
  {
    title: "Empresas",
    path: "/loginEmpresa",
    icon: <WorkIcon sx={{ color: "#fff" }} />,
  },
  {
    title: "UTEC",
    path: "/login",
    icon: <SchoolIcon sx={{ color: "#fff" }} />,
  },
];

export const studentNavLinks = [
  { title: "Perfil", path: "/profile", icon: <AbcIcon /> },
];

export const businessNavLinks = [
  { title: "Perfil", path: "/profile" },
  { title: "Crear oferta", path: "/addOffer" },
  { title: "Crear nuevo reclutador", path: "/addNewRecluter" },
  { title: "Listar reclutadores", path: "/recluterList" },
];

export const adminNavLinks = [
  { title: "Crear nuevo usuario", path: "/newUser" },
];
