import React, {Component, Fragment} from 'react';
import TodoSection from './todo-section'
import FormsSection from './forms-section'
import store from './store'

class App extends Component {

    componentDidMount() {
        store.subscribe(() => this.forceUpdate());
    }

    render() {
        return (
            <Fragment>
                <FormsSection/>
                <TodoSection items={store.getState().items}/>
            </Fragment>
        )
    }
}

export default App