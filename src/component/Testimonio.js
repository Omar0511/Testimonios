import React from 'react';
import '../css/styles.css';

/*
    EXPORTACIÓN NOMBRADA
    Si a la función agregamos export al inicio, ejemplo:
    export function Testimonio()
    En el archivo de App.js, en el import, al llamar a Testimonio
    tenemos que agregar unas llaves, ejemplo:
    import { Testimonio } from './component/Testimonio';
    Con esto podemos exportar varios elementos, no solo 1 como la exportacion por defecto
*/

class Testimonio extends React.Component
{
    render() {
        return (
            <div className='contenedor-testimonio'>
                <img 
                    className='imagen-testimonio'
                    src={ require(`../img/testimonio-${this.props.imagen}.png`)  }
                    alt='Fotografía de Persona'
                />
    
                <div className='contenedor-texto-testimonio'>
                    <p className='nombre-testimonio'>
                        <span className='texto-negrita'>{this.props.nombre}</span> en <span className='texto-negrita'>{this.props.pais}</span>
                    </p>
    
                    <p className='cargo-testimonitos'>
                        {this.props.cargo} en <span className='texto-negrita'>{this.props.empresa}</span>
                    </p>
    
                    <p className='texto-testimonio'>"{this.props.testimonio}"</p>
                </div>
            </div>
        );
    }
}

// Exportación por defecto, solo podemos exportar 1 elemento
export default Testimonio;