import PropTypes from "prop-types";

const primerCom = ({title, subTitle,  name}) => {
  
    return (
    <>
      <h2>{ title }</h2>
      {/* <h1>{  getResultado(1, 3) }</h1> */}
      <p> { subTitle }  </p>

      <p> { name }  </p>
      
    </>
  )
}

primerCom.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
}

primerCom.defaultProps ={
  title: "no hay titulo!!",
  subTitle: "si Lo hay",
  name: "Soy Spider man"
}


export default primerCom;