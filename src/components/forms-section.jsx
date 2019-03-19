import React, { Component } from 'react';
import store from './store'
import uniqid from "uniqid";

class FormsSection extends Component {

    state = {
        addInput: '',
        searchInput: ''
    }

    render() {
        return (
            <div className="forms-section">
                <div className="form-groups">
                    <input type="text" onChange={(e) => this.changeAddInput(e)} className="addItem" value={this.state.addInput}/>
                    <button href="#" onClick={() => this.addToDoItem(this.state.addInput)} className="form-btn" id="add">Add</button>
                </div>
                <div className="form-groups">
                    <input type="text" onChange={(e) => this.changeSearchInput(e)} className="searchItem" value={this.state.searchInput}/>
                    <button className="form-btn" id="search">Search</button>
                </div>
            </div>
        )
    }

    addToDoItem = (title) => {
        store.dispatch({
            type: 'ADD_TODO',
            item: {
                id: uniqid(),
                title: title,
                completed: false
            }
        })
        this.setState({addInput: ''})
    }

    changeAddInput = (e) => {
        let addInput = e.target.value;
        this.setState({addInput})
    }

    changeSearchInput = (e) => {
        let searchInput = e.target.value;
        this.setState({searchInput})
    }
}

export default FormsSection