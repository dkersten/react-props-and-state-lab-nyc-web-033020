import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'
import allPets from '../data/pets.js'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  selectValue = (value) => {
    this.setState({
      filters: {
        type: value
      }
    })
  }

  petType = () => {
    // console.log("test")

    if (this.state.filters.type === "all") {
      fetch(`/api/pets`)
      .then(resp => resp.json())
      .then(data => this.setState({
        pets: data
      }))
    } else {
      fetch(`/api/pets?type=${this.state.filters.type}`)
      .then(resp => resp.json())
      .then(data => this.setState({
        pets: data
      }))
    }
  }

  render() {
    // console.log(this.state.filters.type)
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onFindPetsClick={this.petType} onChangeType={this.selectValue} typeValue={this.state.filters.type} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
