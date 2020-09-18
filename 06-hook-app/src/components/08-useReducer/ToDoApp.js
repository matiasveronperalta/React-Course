import React, { useEffect, useReducer } from 'react';
import { toDoReducer } from './toDoReducer';
import { useForm } from '../../hooks/useForm';

import './styles.css';



const init = () => {
    return [{
        id: new Date().getTime(),
        desc: 'Aprender React',
        done: false
    }];
}


export const ToDoApp = () => {

    const [toDoState, dispatch] = useReducer(toDoReducer, [], init);

    const [{description}, handleInputChange, reset] = useForm({
        description: ''
    });

    useEffect(() => {
        localStorage.setItem();
        return () => {
            cleanup
        }
    }, [toDoState])


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

        const action = {
            type: 'add',
            payload: newTodo,
        }
        
        dispatch(action);
        reset();
    }

    return (
        <div>
            <h1>ToDoApp ({toDoState.length})</h1>
            <hr />
            <div className="row">
                <div className='col-7'>
                    <ul className="list-group list-group-flush">
                        {
                            toDoState.map((todo, i) => (
                                <li
                                    key={todo.id}
                                    className='list-group-item'
                                >
                                    <p className="text-center">{i + 1}. {todo.desc}</p>
                                    <button className="btn btn-danger">
                                        borrar
                            </button>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="col-5">
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
                            onChange={handleInputChange}
                        />
                        <button
                            className="btn btn-outline-primary btn-block"
                            type="submit"
                        >
                            Agregar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
