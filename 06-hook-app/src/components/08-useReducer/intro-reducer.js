const initalState = [{
    id: 1,
    todo: 'Comprar pan',
    done: false
}];

const todoReducer = (state = initalState, action) => {
    if (action?.type === 'agregar') {
        return [...state, action.payload];
    };

    return state;
}

let toDos = todoReducer();

const newToDo = {
    id:2,
    todo: 'Comprar leche',
    done: false
}

const agregarToDoAction = {
    type: 'agregar',
    payload: newToDo
}

toDos = todoReducer(toDos,agregarToDoAction)

console.log(toDos);
