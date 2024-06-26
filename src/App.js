import logo from './logo.svg';
import {v4 as uuid} from "uuid";
import './App.css';
import { Header } from './components/Header/Header';
import { Form } from './components/Form/Form';
import { MyOrg } from './components/MyOrg/MyOrg';
import { useState } from 'react';
import { Equipo } from './components/Equipo/Equipo';
import { Footer } from './components/Footer/Footer';

function App() {

  const [mostrar, actualizaMostrar] = useState(false);
  const [colaboradores, actualizaColaboradores] = useState([]);

  //Arreglo que contiene los datos de cada equipo y sus colores a utilizar
  const [equipos, actualizaEquipos] = useState([
    {
      id: uuid(),
      titulo: "Programación",
      colorPrincipal: "#D9F7E9",
      colorSecundario: "#57C278"
    },

    {

      id: uuid(),
      titulo: "Front-End",
      colorPrincipal: "#E8F8FF",
      colorSecundario: "#82CFFA"
    },

    {
      id: uuid(),
      titulo: "Data science",
      colorPrincipal: "#F0F8E2",
      colorSecundario: "#A6D157"
    },

    {
      id: uuid(),
      titulo: "Devops",
      colorPrincipal: "#FDE7E8",
      colorSecundario: "#E06B69"
    },

    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrincipal: "#FAE9F5",
      colorSecundario: "#DB6EBF",
    },

    {
      id: uuid(),
      titulo: "Móvil",
      colorPrincipal: "#FFF5D9",
      colorSecundario: "#FFBA05"
    },

    {
      id: uuid(),
      titulo: "Inovación y Gestión",
      colorPrincipal: "#FFEEDF",
      colorSecundario: "#FF8A29"
    }
  ]);

  //Funcion que muestra el formulario al darle click en l icono de ADD +
  const mostrarFormulario = () => {
    actualizaMostrar(true);
  }

  //Funcion para ocultar el formulario una vez que ya se envió el formulario 
  const ocultarFormulario = (datosColaborador) => {
    actualizaColaboradores([...colaboradores, datosColaborador]);
    actualizaMostrar(false);
  }

  //Con esto eliminaremos el colaborador (osea como que se elimina del estado)
  const eliminarColaborador = (id) => {
    console.log("Eliminamos el colaborador", id);
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id);
    actualizaColaboradores(nuevosColaboradores);
  }


  //Agrgamos el nuevo equipo al arreglo de equipos
  const crearEquipo = (equipo) => {
    actualizaEquipos([...equipos, equipo]);
  }

  return (
    <div className="App">
      {/* Header() Este linea de código incluyendo las llaves es una forma de usar
      nuestro componente Header creado en Header.js*/ }
      <Header></Header> {/* Esta es la otra forma un poco más comun pero es lo mismo*/ }
      { mostrar === true ? <Form ocultarFormulario={ocultarFormulario} equipos={equipos.map((equipo) => equipo.titulo)} crearEquipo={crearEquipo}></Form> : <div></div> }
      <MyOrg mostrarFormulario={mostrarFormulario}></MyOrg>
      {
        equipos.map((equipo) => {
          return (
          <Equipo datos={equipo}
                  key={equipo.titulo}
                  colaboradores={
                    colaboradores.filter( colaborador => colaborador.equipo === equipo.titulo )
                  }
                  eliminarColaborador={eliminarColaborador}
                  >
          </Equipo>
          );
        })
      }

      <Footer></Footer>

    </div>
  );
}

export default App;
