import React, {useContext}from 'react'
import { ContextPersonas } from './contextos'; 

function Extranjero(){
    return <b>ES EXTRANJERO</b>
}

function DatosPersonas({persona}){

    const {nombre, 
        apellido, 
        documento, 
        tipoDocumento, 
        telefonos, 
        fechaNacimiento
        } = persona;
    return(
        <>
         <b>nombre:</b>{nombre}<br></br>
          <b>apellido:</b>{apellido}<br></br>
          <b>tipo documento:</b>{tipoDocumento}<br></br>
          <b>documento:</b>{documento}<br></br>
          <b>telefonos:</b>{telefonos}<br></br>
          <b>Fecha Nacimiento:</b> {fechaNacimiento || "No esta especificado"}
          {tipoDocumento === "PASAPORTE" &&<><br></br><Extranjero/></>}
           <br/>
        </>
    )
}

export default function Persona({ persona}) {
   
   const {dispatch} =useContext(ContextPersonas)


    function ejecutarElEliminar() {

        if (confirm("Estas seguro de eliminar esta persona?")){
            dispatch({type : "eliminar", documento : persona.documento})
        }
        
    }
    //const { persona } = props;
    return (
            
        <li /*onMouseEnter={this.ingresoConElMouse} onMouseOut={this.salgoConElMouse}*/>
            <DatosPersonas persona={persona}/>
            <button onClick={ejecutarElEliminar}>Eliminar</button>
        </li>
    );
}
