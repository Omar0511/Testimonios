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

function Testimonio()
{
    return (
        <div className='contenedor-testimonio'>
            <img 
                className='imagen-testimonio'
                src={ require('../img/testimonio-emma.png') }
                alt='Fotografía de Persona'
            />

            <div className='contenedor-texto-testimonio'>
                <p className='nombre-testimonio'>Emma Bostian en Suecia</p>
                <p className='cargo-testimonitos'>Ingeniería de Software en Shopify</p>
                <p className='texto-testimonio'>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </p>
            </div>
        </div>
    );
}

// Exportación por defecto, solo podemos exportar 1 elemento
export default Testimonio;