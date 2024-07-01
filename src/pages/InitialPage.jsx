import { useEffect } from "react";
import {
  empresas,
  estudiantes,
  textosDescriptivos,
} from "../assets/static/texts/InitialPageTexts";

import Navbar from "../components/navbar/Navbar";
import Portada from "../components/portada/Portada";
import { SubTittleBar, TittleBar } from "../components/bars";
import AccordionComp from "../components/accordion/AccordionComp";
import "./styles/InitialPage.scss";

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
        <div className="marcosDePantalla">
          <div className="descripcionDelEspacio" id="Empresa">
            {textosDescriptivos()[0].general}
          </div>
        </div>
      </div>

      <TittleBar titulo="Preguntas frecuentes" />

      <div className="columnas">
        <div className="marcosDePantalla">
          <SubTittleBar subtitulo="Empresas" />
          <AccordionComp datos={empresas()} />
        </div>

        <div className="marcosDePantalla">
          <SubTittleBar subtitulo="Estudiantes" />
          <AccordionComp datos={estudiantes()} />
        </div>
      </div>
    </>
  );
};

export default InitialPage;
