import React, { Component } from 'react';

import './status-filter.css';

export default class StatusFilter extends Component {

    render() {
        return (
            <div className="status-filter-wrap">
                <button className="btn btn--active" type="button">All</button>
                <button className="btn" type="button">Active</button>
                <button className="btn" type="button">Done</button>
            </div>
        );
    }
}            