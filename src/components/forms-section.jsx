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
                    <input type="text" onChange={(e) => this.changeAddInput(e)} placeholder="Enter task name here ..." className="addItem" value={this.state.addInput}/>
                    <button href="#" onClick={() => this.addToDoItem(this.state.addInput)} className="form-btn" id="add">Add</button>
                </div>
                <div className="form-groups">
                    <input type="text" onChange={(e) => this.changeSearchInput(e)} placeholder="Search task..." className="searchItem" value={this.state.searchInput}/>
                </div>
            </div>
        )
    }

    addToDoItem = (title) => {
        if (title) {
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
    }

    changeAddInput = (e) => {
        let addInput = e.target.value;
        this.setState({addInput})
    }

    changeSearchInput = (e) => {
        store.dispatch({
            type: 'SEARCH_FILTER',
            searchFilter: e.target.value
        })
        this.setState({searchInput: e.target.value})
    }
}

export default FormsSection