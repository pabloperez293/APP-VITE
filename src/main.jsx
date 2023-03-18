import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './saludoP'
// import App from '/src/primerCom'
// import CounterApp from '/src/components/CounterApp';
import PrimerCom from './PrimerCom';
// linkeado por stilos
import "./styles.css";

ReactDOM.createRoot( document.getElementById("root") ).render (
    <React.StrictMode>
        {/* <CounterApp value= { 5 } /> */}
        <PrimerCom /> 
    </React.StrictMode>
)
