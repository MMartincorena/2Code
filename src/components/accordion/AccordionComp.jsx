import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./style.scss";

const AccordionComp = ({ datos }) => {
  return (
    <>
      {datos.map((dato) => (
        <Accordion
          key={dato.id}
          sx={{
            border: "1px solid #fff",
            borderRadius: "0 !important",
            boxShadow: "none",
            marginTop: "5px",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{
              backgroundColor: "rgba(0,0,0,.05)",
              borderTop: "2px solid #00c7ff",
            }}
          >
            <Typography>{dato.titulo}</Typography>
          </AccordionSummary >
          <AccordionDetails>
            <Typography  component="div">{dato.descripcion}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
};

export default AccordionComp;
