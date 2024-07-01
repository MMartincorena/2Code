import "./styles/TittleBar.scss";

const TittleBar = ({ titulo }) => {
  return (
    <>
      <div className="tituloPrincipals">
        <div className="fondoPrincipals">
          <div className="textoTituloPrincipals"> {titulo} </div>
        </div>
      </div>
    </>
  );
};

export default TittleBar;
