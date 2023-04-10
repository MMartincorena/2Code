import "./SubTittleBar.scss";

const SubTittleBar = ({ subtitulo, ancho }) => {
  return (
    <>
      <div className="titulo">
        <div className="fondo" style={{ width: ancho }}>
          <div className="textoTitulo"> {subtitulo}</div>
        </div>
      </div>
    </>
  );
};

export default SubTittleBar;
