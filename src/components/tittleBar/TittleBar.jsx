import "./TittleBar.scss";

const TittleBar = ({ titulo }) => {
  return (
    <>
      <div className="tituloPrincipal">
        <div className="fondoPrincipal">
          <div className="textoTituloPrincipal"> {titulo} </div>
        </div>
      </div>
    </>
  );
};

export default TittleBar;
