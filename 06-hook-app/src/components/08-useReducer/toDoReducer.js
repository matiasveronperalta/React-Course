export const toDoReducer = (state = [], action) => {
    
    switch (action.type) {
        case 'add':
            return [...state, action.payload];
        // case 'delete':
        //     [...state];
        default:
            return state;
    }
    
}
