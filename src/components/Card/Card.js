import "./Card.css"
import { useState } from "react";
import { HeartFill } from "../HeartFill/HeartFill";
import { HeartNotFill } from "../HeartNotFill/HeartNotFill";

export function Card(props) {

    //https://github.com/harlandlohora.png

    const eliminar = () => {
        props.eliminarColaborador(props.datos.id);
    }

    const [favorito, actualizaFavorito] = useState(false);

    return (
        <div className="card">
            <div className="encabezado" style={{backgroundColor: props.colorSecundario}}>
                <div className="tache" onClick={eliminar}>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M4 7l16 0" />
                        <path d="M10 11l0 6" />
                        <path d="M14 11l0 6" />
                        <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                        <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                    </svg>
                </div>
                <img src={props.datos.foto}/>
            </div>

            <div className="info">
                <h4>{props.datos.nombre}</h4>
                <h5>{props.datos.puesto}</h5>
                {favorito === true ? <HeartFill favorito={favorito} actualizaFavorito={actualizaFavorito}></HeartFill> : <HeartNotFill favorito={favorito} actualizaFavorito={actualizaFavorito}></HeartNotFill>}
            </div>
        </div>
    )
}