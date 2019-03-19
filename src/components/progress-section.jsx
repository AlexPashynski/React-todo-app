import React, {Component} from 'react';
import store from './store'

class ProgressSection extends Component {

    render() {

        const {items} = store.getState();
        const completedNum = items.filter( item => item.completed === true).length;
        const widthProp = { width: `${completedNum / items.length * 100}%`}

        return (
            <div className="progress-block">
                <span className="stat">{completedNum} of {items.length} completed</span>
                <div className="progress-bar">
                    <div className="current-progress" style={widthProp}></div>
                </div>
            </div>
        )
    }
}

export default ProgressSection