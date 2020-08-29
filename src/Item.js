import React, { Component } from 'react';
import {USCurrencyFormat} from './App.js';
import slugify from 'slugify';

export default class Item extends Component {
    render() {
        const {
            itemHash,
            feature,
            item,
            selected,
            updateFeature
        } = this.props;
        return (
            <div key={itemHash} className="feature__item">
              <input
                type="radio"
                id={itemHash}
                className="feature__option"
                name={slugify(feature)}
                checked={item.name === selected[feature].name}
                onChange={e => updateFeature(feature, item)}
              />
              <label htmlFor={itemHash} className="feature__label">
                {item.name} ({USCurrencyFormat.format(item.cost)})
              </label>
            </div>
          );
    }
}