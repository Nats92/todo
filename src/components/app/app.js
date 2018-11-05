import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Header from '../header';
import TodoList from '../todo-list';
import SearchPanel from '../search-panel';
import AddNewItem from '../add-new-item';
import './app.css';

export default class App extends Component {
    constructor() {
        super();
        this.maxId = 100;
        this.state = {
            todoData: [
                this.createNewItem('Drink coffee'),
                this.createNewItem('Make Awesome App'), 
                this.createNewItem('Have a lunch')
            ]
        }

        this.onListItemDelete = (id) => {
            this.setState(({todoData}) => {
                const idxToDel = todoData.findIndex( (el) => el.id === id );

                const changedArr = [
                    ...todoData.slice(0, idxToDel),
                    ...todoData.slice(idxToDel + 1)
                ];

                return {
                    todoData: changedArr
                };
            });
        }

        this.onExclamationClick = (id) => {
            this.setState(({todoData}) => {
                return {
                    todoData: this.toggleProperty(todoData, id, 'important')
                }
            });
        }

        this.onListItemClick = (id) => {
            this.setState(({todoData}) => {
                return {
                    todoData: this.toggleProperty(todoData, id, "done")
                }
            });
        }

        this.addNewItem = (text) => {
            this.setState(({todoData}) => {
                return {
                    todoData: [...todoData, this.createNewItem(text)]
                };
            });
        }
    }

    toggleProperty(arr, id, propName) {
        const idx = arr.findIndex( (el) => el.id === id );
        const changedArr = arr.slice();
        changedArr[idx][propName] = !arr[idx][propName];

        return changedArr
    }

    createNewItem(label) {
        return {
            label, 
            important: false,
            done: false, 
            id: this.maxId++ 
        }
    }

    render() {

        const {todoData} = this.state;
        const doneItems = todoData.filter( (el) => el.done ).length;
        const itemsToDo = todoData.length - doneItems;

        return (
            <div className="todo-wrap">
                <Header toDo={itemsToDo} done={doneItems}/>
                <SearchPanel />
                <TodoList 
                    todos = {this.state.todoData}
                    onDelete = {this.onListItemDelete} 
                    onListItemClick = {this.onListItemClick} 
                    onExclamationClick = {this.onExclamationClick} />
                <AddNewItem 
                    addItem = {this.addNewItem} />
            </div>
        );
    }
};