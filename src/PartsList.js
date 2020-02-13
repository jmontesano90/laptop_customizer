import React, { Component } from 'react'
import ItemType from './ItemType'


class PartsList extends Component{

    render(){

        return(
            <form className="main__form">
                <h2>Customize your laptop</h2>
                <ItemType features={this.props.features} updateFeature={this.props.updateFeature}/>
            </form>
        )
    }
}

export default PartsList;