import React, { Component } from 'react';
import {USCurrencyFormat} from './App.js'; 

export default class MainSummary extends Component {
    render() {
        const {summary, total} = this.props
        return(
            <section className="main__summary">
                <h2>Your cart</h2>
                {summary}
                <div className="summary__total">
                <div className="summary__total__label">Total</div>
                <div className="summary__total__value">
                    {USCurrencyFormat.format(total)}
                </div>
                </div>
            </section>
        )
    }
}