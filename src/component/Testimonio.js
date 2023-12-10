import React from 'react';

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

export default Testimonio;