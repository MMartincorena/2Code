import "./Portada.scss"


const Portada = () => {
  return (
    <>
      <div className="contenedor-imagen">
        <img
          src="../../src/assets/static/images/HEADER.png"
          alt="Cuadricula con estudiantes"
          className="imagenHeader"
        />
        <div className="capa"></div>
        <div className="texto">OPORTUNIDADES LABORALES</div>
      </div>
    </>
  );
};

export default Portada;
