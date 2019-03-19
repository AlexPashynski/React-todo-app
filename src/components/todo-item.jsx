import React, {Component} from 'react';
import store from './store'

class TodoItem extends Component {

    render() {

        const {id, title, completed} = this.props.item
        const checkboxClass = completed ? 'far fa-check-square' : 'far fa-square';
        const titleClass = completed ? 'title completed' : 'title';

        return (
            <li className="todo">
                <div className="check">
                    <i className={checkboxClass} onClick={() => {this.toggleComplete(id)}}></i>
                </div>
                <div className={titleClass}>{title}</div>
                <div className="delete">
                    <i className="fas fa-edit"></i>
                    <i className="fas fa-trash" onClick={() => {this.deleteItem(id)}}></i>
                </div>
            </li>
        )
    }

    deleteItem = (id) => {
        store.dispatch({
            type: 'DELETE_TODO',
            id: id
        })
    }

    toggleComplete = (id) => {
        store.dispatch({
            type: 'TOGGLE_COMPLETE_TODO',
            id: id
        })
    }
}

export default TodoItem