import React, { Component } from 'react';
import FeatureList from './FeatureList.js';

export default class Form extends Component {
    render() {
        return (
        <form className="main__form">
            <h2>Customize your laptop</h2>
            <FeatureList 
                updateFeature={this.props.updateFeature}
                selected={this.props.selected}/>
          </form>
        )
    }
}
