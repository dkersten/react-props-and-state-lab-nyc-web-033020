import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  
  render() {
    // console.log(this.props.pets)
    return <div className="ui cards">
      {/* {this.props.pets.map(pet => <Pet key={pet.id} {...pet} />)} */}
      {this.props.pets.map((pet, index) => <Pet key={index} {...pet} /> )}
    </div>
  }
}

export default PetBrowser
