import React, { useEffect, useReducer } from 'react';
import { toDoReducer } from './toDoReducer';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

import './styles.css';

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const ToDoApp = () => {

    const [toDoState, dispatch] = useReducer(toDoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(toDoState));
    }, [toDoState])


    const handleDelete = (toDoId) => {
        dispatch({
            type: 'delete',
            payload: toDoId,
        });
    };

    const handleToggle = (todoId) => {
        dispatch({
            type: 'toggle',
            payload: todoId
        })
    };

    const handleAdd = (newTodo) => {
        dispatch({
            type: 'add',
            payload: newTodo
        })
    };

    return (
        <div>
            <h1>ToDoApp ({toDoState.length})</h1>
            <hr />
            <div className="row">
                <div className='col-7'>
                    <TodoList 
                        toDoState={toDoState} 
                        handleToggle={handleToggle}
                        handleDelete={handleDelete} 
                    />
                </div>
                <div className="col-5">
                    <TodoAdd
                        handleAdd = {handleAdd}
                    />
                </div>
            </div>
        </div>
    )
}


