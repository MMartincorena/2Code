import { useEffect } from "react";
import TittleBar from "../components/tittleBar/tittleBar";
import SubTittleBar from "../components/subTittleBar/SubTittleBar";
import AccordionComponent from "../components/accordion/AccordionComponent";
import {
  empresas,
  estudiantes,
  textosDescriptivos,
} from "../assets/static/texts/InitialPageTexts";

import "./styles/InitialPage.scss";
import Navbar from "../components/navbar/Navbar";
import Portada from "../components/portada/Portada";

const InitialPage = () => {
  /* useEffect el cual cambia el titulo de la página */
  useEffect(() => {
    document.title = "UTEC Jobs";
  }, []);

  const url = [
    { url_Youtube: "https://www.youtube.com/watch?v=_w4sPyiNdBY" },
    { url_LinkedIn: "https://www.youtube.com/watch?v=Xcn_2Z9cBRs" },
  ];

  return (
    <>
      <Navbar />
      <Portada />
      <TittleBar titulo="UTEC Jobs" />
      <div className="columnas">
        <div className="descripcionDelEspacio" id="Empresa">
          {textosDescriptivos()[0].general}
        </div>
      </div>

      <TittleBar titulo="Preguntas frecuentes" />

      <div className="columnas">
        <div className="marcosDePantalla">
          <SubTittleBar subtitulo="Empresas" />
          <AccordionComponent datos={empresas()} />
        </div>

        <div className="marcosDePantalla">
          <SubTittleBar subtitulo="Estudiantes" />
          <AccordionComponent datos={estudiantes()} />
        </div>
      </div>
    </>
  );
};

export default InitialPage;
