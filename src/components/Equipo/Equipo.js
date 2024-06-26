import "./Equipo.css"
import { Card } from "../Card/Card";

export function Equipo(props) {

    //Destructuracion 
    //Esto sirve para no tener que escribir props.datos.colorPrincipal (por ejemplo)
    //Esta linea ya lo hace por nosotros es como si hicieramos
    // const colorPrincipal = props.datos.colorPrincipal y ya para poder usar despues solo colorPrincipal
    const {colorPrincipal, colorSecundario, titulo} = props.datos;

    //const {colaboradores} = props;


    /*
        Estas lineas hacen lo mismo que las lineas de abajo:
        return <>
            {
                props.colaboradores.length > 0 &&
                <section className="equipo" style={{ backgroundColor: colorPrincipal}}>
                    <h3 style={{borderBottomColor: colorSecundario}}>{titulo}</h3>
                    <div className="colaboradores">
                        
                        {
                            props.colaboradores.map((colaborador, index) => {
                                return <Card datos={colaborador} key={index}></Card>
                            })
                        }
                    </div>
                </section>
            }
        </>
    */

        if(props.colaboradores.length > 0) {
            return(

                <section className="equipo" style={{ backgroundColor: colorPrincipal}}>
                    <h3 style={{borderBottomColor: colorSecundario}}>{titulo}</h3>
                    <div className="colaboradores">
                        
                        {
                            props.colaboradores.map((colaborador, index) => {
                                return <Card datos={colaborador}
                                             key={index} 
                                             colorSecundario={colorSecundario}
                                             eliminarColaborador={props.eliminarColaborador}
                                             >
                                        </Card>
                            })
                        }
                    </div>
                </section>
                
            );
        } else {
            return <></>
        }
}