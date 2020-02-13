import React, { Component } from 'react'
import slugify from 'slugify';

class Item extends Component{

    render(){
        
        const USCurrencyFormat = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
          });
        const options = this.props.features[this.props.feature].map(item => {
            const itemHash = slugify(JSON.stringify(item));
            return (
              <div key={itemHash} className="feature__item">
                <input
                  type="radio"
                  id={itemHash}
                  className="feature__option"
                  name={slugify(this.props.feature)}
                  checked={item.name === this.props.features[this.props.feature].name}
                  onChange={e => this.props.updateFeature(this.props.feature, item)}
                />
                <label htmlFor={itemHash} className="feature__label">
                  {item.name} ({USCurrencyFormat.format(item.cost)})
                </label>
              </div>
            );
          }); 
          return(
              <div>
                  {options}
              </div>
          )     

    }
}

export default Item;