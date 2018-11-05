import React, { Component } from 'react';

import './todo-list-item.css';

const TodoListItem = ({label,
               done, 
               important, 
               onDelete,
               onExclamationClick, 
               onListItemClick}) => {
    let classNames = 'todo-list-item';

    if (done) {
        classNames += '  todo-list-item--done';
    }
    if (important) {
        classNames += '  todo-list-item--important';
    }

    return (
        <p className = {classNames}>
            <span 
                className = "todo-list-item__label"
                onClick = {onListItemClick}> 
                {label} 
            </span>
            
            <button
                className = "btn btn--delete" 
                type = "button"
                onClick = {onDelete}>
                <i className = "fa fa-trash-o"></i> 
            </button>
            <button
                className = "btn btn--exclamation" 
                type = "button"
                onClick = {onExclamationClick}>
                <i className="fa fa-exclamation"></i>    
            </button>
        </p>
    ); 
}

export default TodoListItem;