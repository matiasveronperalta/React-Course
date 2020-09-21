import React from 'react'
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({handleAdd, description, handleInputChange}) => {

    const [{ description }, handleInputChange, reset] = useForm({
        description: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (description.trim().length <= 1) {
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }
        
        handleAdd(newTodo);
        reset();
    };


    return (
        <>
            <h4>Agregar</h4>
            <hr />

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="form-control"
                    name="description"
                    placeholder="Aprender.."
                    autoComplete="off"
                    value={description}
                    onChange={handleInputChange} />
                <button
                    className="btn btn-outline-primary btn-block"
                    type="submit"
                >
                    Agregar
            </button>
            </form>

        </>
    )
}
