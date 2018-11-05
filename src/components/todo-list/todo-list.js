import React from 'react';
import TodoListItem from '../todo-list-item';
import './todo-list.css';

const TodoList = ( {todos, onDelete, onExclamationClick, onListItemClick} ) => {

    const items = todos.map( (todo) => {
        const { id, ...restProps } = todo;

        return (
            <li className = "list-group-item" 
                key={id}>
                <TodoListItem 
                    onDelete = {() => onDelete(id)}
                    onListItemClick = {() => onListItemClick(id)}
                    onExclamationClick = {() => onExclamationClick(id)}
                    { ...restProps } />
            </li>
        );
    }); 

    return (
        <ul className = "list-group  todo-list"> 
            {items} 
        </ul>
    );
};

export default TodoList;