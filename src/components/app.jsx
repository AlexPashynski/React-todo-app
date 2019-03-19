import React, {Component, Fragment} from 'react';
import TodoSection from './todo-section'
import FilterSection from './filter-section'
import FormsSection from './forms-section'
import ProgressSection from './progress-section'
import store from './store'

class App extends Component {

    componentDidMount() {
        store.subscribe(() => this.forceUpdate());
    }

    render() {
        return (
            <Fragment>
                <FormsSection/>
                <ProgressSection/>
                <FilterSection/>
                <TodoSection/>
            </Fragment>
        )
    }
}

export default App