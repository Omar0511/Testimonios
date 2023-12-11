import React from 'react';

/*
    EXPORTACIÓN NOMBRADA
    Si a la función agregamos export al inicio, ejemplo:
    export function Testimonio()
    En el archivo de App.js, en el import, al llamar a Testimonio
    tenemos que agregar unas llaves, ejemplo:
    import { Testimonio } from './component/Testimonio';
*/

function Testimonio()
{
    return (
        <div className='contenedor-testimonio'>
            <img 
                className='imagentestimonio'
                src={ require('../img/testimonio-shawn.png') }
                alt='Fotografía de Persona'
            />

            <div className='contenedor-texto-testimonio'>
                <p className='nombre-testimonio'>Emma Bostian en Suecia</p>
                <p className='cargo-testimonitos'>Ingeniería de Software en Shopify</p>
                <p className='texto-testimonio'>
                    "Siempre he tenido problemas para aprender JavaScript"
                </p>
            </div>
        </div>
    );
}

// EXportación por defecto
export default Testimonio;