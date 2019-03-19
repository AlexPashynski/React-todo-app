import React, { Component } from 'react';
import TodoItem from './todo-item'

class TodoSection extends Component {

    render() {

        const items = this.props.items;
        const renderedItems = items.map( item => {return <TodoItem key={item.id} item={item}/>})

        return (
            <div className="todo-section">
                <ul>
                    {renderedItems}
                </ul>
            </div>
        )
    }
}

export default TodoSection