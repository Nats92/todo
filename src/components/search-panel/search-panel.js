import React from 'react';
import StatusFilter from '../status-filter';

import './search-panel.css';

const SearchPanel = () => {
    return (
        <div className="search-panel">
            <input 
                className="search-field"
                type="text" 
                placeholder="type to search" />
            <StatusFilter/>
        </div>
    );
};

export default SearchPanel;