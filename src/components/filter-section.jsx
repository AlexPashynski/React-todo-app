import React, {Component} from 'react';
import store from './store'
import FilterItem from "./filter-item";

class FilterSection extends Component {

    render() {
        const {filters, activeFilterId} = store.getState();
        const renderedFilters = filters.map( filter => <FilterItem key={filter.id} filter={filter} activeFilterId={activeFilterId}/>)
        return (
            <div className="filter-block">
                <ul className="filter">
                    {renderedFilters}
                </ul>
            </div>
        )
    }
}

export default FilterSection