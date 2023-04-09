import "./SubTittleBar.scss";

const SubTittleBar = ({ subtitulo }) => {
  return (
    <>
      <div className="titulo">
        <div className="fondo">
          <div className="textoTitulo"> { subtitulo }</div>
        </div>
      </div>
    </>
  );
};

export default SubTittleBar;
