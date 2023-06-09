import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./style.scss";

const AccordionComponent = ({ datos }) => {
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
              backgroundColor: "rgba(0,0,0,.03)",
              borderTop: "2px solid #00c7ff",
            }}
          >
            <Typography sx={{ fontFamily: "utec_roman", fontSize: "16px" }}>
              {dato.titulo}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ fontFamily: "utec_roman", fontSize: "16px" }}>
              {dato.descripcion}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
};

export default AccordionComponent;
