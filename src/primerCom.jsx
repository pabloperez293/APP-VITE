import PropTypes from "prop-types";

export const PrimerCom = ({ title, subTitle,  name }) => {
  
    return (
    <>
      <h2>{ title }</h2>
      {/* <h1>{  getResultado(1, 3) }</h1> */}
      <p> { subTitle }  </p>

      <p> { name }  </p>
      
    </>
  )
}

PrimerCom.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
}

PrimerCom.defaultProps = {
  name: `no hay titulo!!`,
  subTitle: `si Lo hay`,
  // title: `Soy Spider man`,
}

export default PrimerCom;