import React, {Component} from 'react';

import './add-new-item.css';

export default class AddNewItem extends Component {
    
    constructor() {
        super();

        this.state = {
            label: ''
        }

        this.onLabelChange = (evt) => {
            this.setState({
                label: evt.target.value
            })
        }

        this.onSubmit = (evt) => {
            evt.preventDefault();
            this.props.addItem(this.state.label);
            this.setState({
                label: ''
            })
        }

    }

    render() {
        return (
            <form className = "add-item-form"
                  onSubmit = {this.onSubmit}>
                <input type = "text"
                       className = "form-control"
                       placeholder = "What needs to be done"
                       onChange = {this.onLabelChange}
                       value = {this.state.label}/>
                <button type = "submit" 
                        className = "btn add-button">
                    Add new item
                </button>
            </form>
        );
    };
}; 