/* Import node modules */
import React from 'react';
/* Import own modules */
import './Buttons.css';

export default class ButtonLight extends React.Component {
    render() {
        return (
            <button className={`boton--light ${this.props.className} boton--${this.props.color}`}>
                <i className={this.props.icon}>
                    {this.props.span && <span>{this.props.span}</span>}
                </i>
            </button>
        );
    };
}