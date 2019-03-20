import React, { Component } from 'react';
import TodoItem from './todo-item'
import store from './store'

class TodoSection extends Component {

    render() {
        
        let {items, activeFilterId, searchFilter} = store.getState();
        let renderItems = searchFilter ? items.filter( item => item.title.toLowerCase().includes(searchFilter.toLowerCase())) : items
        let message = '';
        if (activeFilterId === 1) {
            items = renderItems.filter( item => item.completed === false);
            message = 'You don\'t have any tasks to do!'
        } else if (activeFilterId === 2) {
            items = renderItems.filter( item => item.completed === true);
            message = 'You don\'t have completed tasks!'
        } else if (activeFilterId === 3) {
            items= renderItems;
            message = 'You don\'t have any tasks!'
        }


        return (
            <div className="todo-section">
                <ul>
                    {items.length ? items.map( item => <TodoItem key={item.id} item={item}/>) : <li className="todo empty">{message}</li>}
                </ul>
            </div>
        )
    }
}

export default TodoSection