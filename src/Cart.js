import React, { Component } from 'react'
import SelectedItems from './SelectedItems.js'
import Total from './Total'

class Cart extends Component{
    render(){
        console.log(this.props.selected);
        return(
             <section className="main__summary">
            <h2>Your cart</h2>
            <SelectedItems selected={this.props.selected}/>
            <Total selected={this.props.selected}/>
          </section>
        )
    }
}

export default Cart;