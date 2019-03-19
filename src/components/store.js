import { createStore } from 'redux';

const initialState = {
    items: [
        {
            id: 0,
            title: 'Learn react',
            completed: false
        }
    ]
};

function reducer(state, action) {
    if (action.type === 'ADD_TODO') {
        return {
            items: state.items.concat(action.item),
        };
    } else if (action.type === 'DELETE_TODO') {
        return {
            items: state.items.filter( item => item.id !== action.id),
        };
    } else if (action.type === 'TOGGLE_COMPLETE_TODO') {
        let items = [...state.items]
        let index = items.findIndex( item => item.id === action.id);
        items[index].completed = !items[index].completed
        return {items};
    } else {
        return state;
    }
}

const store = createStore(reducer, initialState);

export default store;