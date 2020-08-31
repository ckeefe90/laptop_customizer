import React, { Component } from "react";
import Item from './Item.js';
import Feature from './Feature.js';
import slugify from 'slugify';

const FEATURES = {
    Processor: [
      {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
      {
        name: 'Professor X AMD Fire Breather with sidewinder technology',
        cost: 1200
      }
    ],
    "Operating System": [
      {
        name: 'Ubuntu Linux 16.04',
        cost: 200
      },
      {
        name: 'Bodhi Linux',
        cost: 300
      }
    ],
    "Video Card": [
      {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98
      },
      {
        name: 'Mind mild breeze 2000',
        cost: 1345
      }
    ],
    Display: [
      {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      },
      {
        name: '15.3" HGTV (3840 x 2160) Home makeover edition',
        cost: 1400
      },
    ]
  };

export default class FeatureList extends Component {
    
    render() {
        return Object.keys(FEATURES).map((feature, idx) => {
          const featureHash = feature + '-' + idx;
          const options = FEATURES[feature].map(item => {
            const itemHash = slugify(JSON.stringify(item));
            return (
              <Item
                key={itemHash}
                itemHash={itemHash}
                feature={feature}
                item={item}
                selected={this.props.selected}
                updateFeature={this.props.updateFeature}/>
            );
          });
    
          return (
            <Feature
              key={featureHash}
              featureHash={featureHash}
              feature={feature}
              options={options}/>
          );
        });
    }
}