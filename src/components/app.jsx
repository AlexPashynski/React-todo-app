import React, {Component} from 'react';
import { createStore } from 'redux';
import TodoSection from './todo-section'
import uniqid from 'uniqid'

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
            items: state.items.concat(
                {
                    id: uniqid(),
                    title: action.title,
                    completed: false
                }
            ),
        };
    } else {
        return state;
    }
}

const store = createStore(reducer, initialState);

class App extends Component {

    componentDidMount() {
        store.subscribe(() => this.forceUpdate());
    }

    render() {
        return <TodoSection items={initialState.items}/>
    }
}

export default App