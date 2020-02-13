import React, { Component } from 'react'
import Item from './Item'


class ItemType extends Component{


    
    render(){


        const features = Object.keys(this.props.features).map((feature, idx) => {
            const featureHash = feature + '-' + idx;

            return (
              <fieldset className="feature" key={featureHash}>
                <legend className="feature__name">
                  <h3>{feature}</h3>
                </legend>
                <Item features={this.props.features} updateFeature={this.props.updateFeature} feature={feature}/>
              </fieldset>
            );
          });
          return(
              <div>
                  {features}
              </div>
          ) 
               
    }
}

export default ItemType;