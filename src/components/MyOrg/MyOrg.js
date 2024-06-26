import "./MyOrg.css";
import { useState } from "react";

export function MyOrg(props) {

    /*
        Esto es solo un ejemplo de como funcionan los hooks de react
        en este caso usamos el hook useSatet:

        const [mostrar, actualizaMostrar] = useState(true);

        const manejarClick = () => {
            console.log("Diste click en agregar Usuario");
            actualizaMostrar(!mostrar);
        }

    */


    return(
        <section className="orgSection">
            <h3 className="title">Mi Organización</h3>
            <img src="/img/boton-add.png" alt="agregar" onClick={props.mostrarFormulario}/>
        </section>
    )
}