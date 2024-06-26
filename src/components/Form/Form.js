import "./Form.css";
import {v4 as uuid} from "uuid";
import { useState } from "react";

export function Form(props) {

    //Informacion y manejo del primero formulario de crear Colaborador
    const [nombre, actualizaNombre] = useState("");
    const [puesto, actualizaPuesto] = useState("");
    const [foto, actualizaFoto] = useState("");
    const [equipo, actualizaEquipo] = useState("");

    const manejarEnvio = (event) => {
        event.preventDefault();
        console.log("Se manejó el envío del formulario... :)", event);
        let valoresForm = {
            id: uuid(),
            nombre: nombre,
            puesto: puesto,
            foto: foto,
            equipo: equipo
        }
        console.log(valoresForm);
        props.ocultarFormulario(valoresForm);
    }

    const cambiarNombre = (e) => {
        actualizaNombre(e.target.value);
    }

    const cambiarPuesto = (e) => {
        actualizaPuesto(e.target.value);
    }

    const cambiarFoto = (e) => {
        actualizaFoto(e.target.value);
    }

    const cambiaEquipo = (e) => {
        actualizaEquipo(e.target.value);
    }


    //Informacion y manejo del segundo formulario para crear un equipo
    const [nombreEquipo, actualizaNombreEquipo] = useState("");
    const [colorPrincipalEquipo, actualizaColorPrincipal] = useState("");
    const [colorSecundarioEquipo, actualizaColorSecundario] = useState("");

    const cambiarNombreEquipo = (e) => {
        actualizaNombreEquipo(e.target.value);
    }

    const cambiarColorPrimario = (e) => {
        actualizaColorPrincipal(e.target.value);
    }

    const cambiarColorSecundario = (e) => {
        actualizaColorSecundario(e.target.value);
    }

    const manejarEnvioEquipo = (evento) => {
        evento.preventDefault();

        let nuevoEquipo = {
            id: uuid(),
            titulo: nombreEquipo,
            colorPrincipal: colorPrincipalEquipo,
            colorSecundario: colorSecundarioEquipo
        }

        console.log("Se creó el nuevo equipo con los datos: ", nuevoEquipo);

        props.crearEquipo(nuevoEquipo);
    }

    return (
        <section className="formularios">
            <form className="formulario" onSubmit={manejarEnvio}>
                <h2 className="titulo-formulario">Rellena el formulario para crear el colaborador.</h2>

                <div className="campo">
                    <label className="label_campo">Nombre</label>
                    <input type="text" placeholder="Ingresar nombre" className="input_campo" required value={nombre} onChange={cambiarNombre}/>
                </div>

                <div className="campo">
                    <label className="label_campo">Puesto</label>
                    <input type="text" placeholder="Ingresar puesto" className="input_campo" required value={puesto} onChange={cambiarPuesto}/>
                </div>

                <div className="campo">
                    <label className="label_campo">Foto</label>
                    <input type="text" placeholder="Ingresar enlace de foto" className="input_campo" required value={foto} onChange={cambiarFoto}/>
                </div>

                <div className="campo">
                    <label className="label_campo">Equipo</label>
                    <select className="input_campo select_campo" required value={equipo} onChange={cambiaEquipo}>
                        <option value={""} disabled hidden defaultValue={""}>Seleccionar equipo</option>
                        {
                            props.equipos.map((equipo, index) =>{
                                return(
                                    <option value={equipo} key={index}>{equipo}</option>
                                )
                            })
                        }
                    </select>
                </div>

                <div className="btn-align">
                    <button className="btn-crear">Crear</button>
                </div>
            </form>

            <form className="formulario" onSubmit={manejarEnvioEquipo}>
                <h2 className="titulo-formulario">Rellena el formulario para crear el Equipo.</h2>

                <div className="campo">
                    <label className="label_campo">Nombre del Equipo</label>
                    <input type="text" placeholder="Ingresar nombre del equipo" className="input_campo" required value={nombreEquipo} onChange={cambiarNombreEquipo}/>
                </div>

                <div className="campo campo-color">
                    <label className="label_campo">Color principal</label>
                    <input type="color" className="input_campo input_campo_color" required value={colorPrincipalEquipo} onChange={cambiarColorPrimario}/>
                </div>

                <div className="campo campo-color">
                    <label className="label_campo">Color Secundario</label>
                    <input type="color" className="input_campo input_campo_color" required value={colorSecundarioEquipo} onChange={cambiarColorSecundario}/>
                </div>

                
                <div className="btn-align">
                    <button className="btn-crear">Crear equipo</button>
                </div>

            </form>

        </section>
    )
}