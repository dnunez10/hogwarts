import React from 'react'
import PigContainer from './PigContainer'

export default class Pig extends React.Component {
    state= {
        details: false
    }

    nameChange = name => {
        return name.toLowerCase().split(' ').join('_')
    }

    render(){
    let pigImage = require(`../hog-imgs/${this.nameChange(this.props.hog.name)}.jpg`)

    return(
        <div onClick={() => this.setState({ details: !this.state.details}) } className='ui four wide column pigTile image'>
            <h3>{this.props.hog.name}</h3>
            <img src={pigImage} alt='hog' />
            {this.state.details && <PigContainer hog={this.props.hog}/>}
        </div>
    )
}
}
