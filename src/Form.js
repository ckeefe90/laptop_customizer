import React, { Component } from 'react';

export default class Form extends Component {
    render() {
        const {
            features
        } = this.props;
        return (
        <form className="main__form">
            <h2>Customize your laptop</h2>
            {features}
          </form>
        )
    }
}
