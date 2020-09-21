import React from 'react'
import { TodoItem } from './TodoItem';

export const TodoList = ({ toDoState, handleToggle, handleDelete }) => {
    return <ul className="list-group list-group-flush">
        {toDoState.map((todo, i) => (
            <TodoItem
                key={todo.id}
                todo={todo}
                handleToggle={handleToggle}
                i={i}
                handleDelete={handleDelete}
            />
        ))}
    </ul>;
}

