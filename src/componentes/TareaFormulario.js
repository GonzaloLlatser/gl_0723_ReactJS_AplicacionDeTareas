import React from "react";

function TareaFormulario(props) {
    return (
        <form className='Tarea-formu'>
            <input
                className='tarea-input'
                type='text'
                placeholder='Escribe una Tarea'
                name='texto'
            />
            <button className='tarea-boton'>
                Agregar Tarea
            </button>
        </form>
    );
}

export default TareaFormulario;