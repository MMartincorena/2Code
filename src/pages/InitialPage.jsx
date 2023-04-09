import { useEffect } from "react";
import Navbar from "../components/navbar/Navbar";
import TittleBar from "../components/tittleBar/tittleBar";
import SubTittleBar from "../components/subTittleBar/SubTittleBar";
import AccordionComponent from "../components/accordion/AccordionComponent";
import {
  empresas,
  estudiantes,
  textosDescriptivos,
} from "../assets/static/texts/InitialPageTexts";
import Video from "../components/videos/Video";

import "./styles/InitialPage.scss";
import Portada from "../components/portada/Portada";

const InitialPage = () => {
  /* useEffect el cual cambia el titulo de la página */
  useEffect(() => {
    document.title = "Juniors";
  }, []);

  const url = [
    { url_Youtube: "https://www.youtube.com/watch?v=_w4sPyiNdBY" },
    { url_LinkedIn: "https://www.youtube.com/watch?v=Xcn_2Z9cBRs" },
  ];

  return (
    <>
      <Navbar />
      <Portada />
      <div className="descripcionDelEspacio" id="Empresa">
        {textosDescriptivos()[0].general}
      </div>

      <div className="zonas" >
        <TittleBar titulo="EMPRESAS" />
        <div className="descripcionDelEspacio">
          {textosDescriptivos()[1].empresa}
        </div>
        <SubTittleBar subtitulo="Preguntas frecuentes" />

        <div className="marcosDePantalla" >
          <AccordionComponent datos={empresas()} />
        </div>
      </div>

      <hr />
      
      <div className="zonas" id="Estudiante">
        <TittleBar titulo="ESTUDIANTES" />
        <div className="descripcionDelEspacio">
          {textosDescriptivos()[2].estudiante}
        </div>
        <SubTittleBar subtitulo="Preguntas frecuentes" />

        <div className="marcosDePantalla">
          <AccordionComponent datos={estudiantes()} />
        </div>
      </div>
      {/* 
      <div className="zonas">
        <div className="descripcionDelEspacio"></div>
        <div className="marcosDePantalla">
          <SubTittleBar subtitulo="Preparación del CV" />
          {textosDescriptivos()[3].preparacionCV}
          <Video url={url[0].url_Youtube} />
        </div>
      </div>

      <div className="zonas">
        <div className="descripcionDelEspacio"></div>
        <div className="marcosDePantalla">
          <SubTittleBar subtitulo="Perfil en LinkedIn" />
          {textosDescriptivos()[4].preparacionLI}
          <Video url={url[1].url_LinkedIn} />
        </div>
      </div> */}
    </>
  );
};

export default InitialPage;
