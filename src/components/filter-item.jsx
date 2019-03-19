import React, {Component} from 'react';
import store from './store'

class FilterItem extends Component {

    render() {
        const {id, title} = this.props.filter;
        const activeFilterId = this.props.activeFilterId;
        const classList = activeFilterId === id ? 'tab active' : 'tab';

        return (
            <li className={classList} onClick={() => this.applyFilter(id)}>{title}</li>
        )
    }

    applyFilter = (id) => {
        store.dispatch({
            type: 'APPLY_FILTER',
            id: id
        })
    }
}

export default FilterItem