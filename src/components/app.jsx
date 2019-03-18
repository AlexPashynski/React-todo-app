import React, {Component} from 'react';
import TodoSection from './todo-section'

const items = [
    {
        id: 0,
        title: 'Learn react',
        completed: false
    },
    {
        id: 1,
        title: 'Learn javasctipt',
        completed: true
    },
    {
        id: 2,
        title: 'Become front-end guru',
        completed: false
    }
]

class App extends Component {
    render() {
        return <TodoSection items={items}/>
    }
}

export default App