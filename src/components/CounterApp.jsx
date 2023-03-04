import { useState } from "react";
import PropTypes from "prop-types";

// Linea 1 y 2 tengo el funcional compo.

const counter = ({ value }) => {

    // Desestructuracion del retorno 
    const [ counter, setCounter ] = useState( value ) 

    const handleAdd = () => { 
        // console.log(evt)
        setCounter( counter +1 );
    }

    const handleMenos = () => { 
        // console.log(evt)
        setCounter( counter - 1 );
    }

    const handleRes = () => { 
        // console.log(evt)
        setCounter( value );
    }
     
    return(
        <>
        <h1> Contador </h1>
        <h2> { counter }</h2>
        
        <button onClick={ handleAdd }> +1 </button>
        <button onClick={ handleRes }> Reset </button>
        <button onClick={ handleMenos }> -1 </button>
        </>
    )
}

counter.propTypes = {
    value: PropTypes.number,
  }

export default counter;