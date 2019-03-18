import React, {Component} from 'react';

class TodoItem extends Component {
    render() {

        const {id, title, completed} = this.props.item
        const checked = completed ? 'checked' : null;

        return (
            <li className="todo" key={id}>
                <div className="check">
                    <input type="checkbox" checked={checked}/>
                </div>
                <div className="title">{title}</div>
                <div className="delete">
                    <i className="fas fa-edit"></i>
                    <i className="fas fa-trash"></i>
                </div>
            </li>
        )
    }
}

export default TodoItem