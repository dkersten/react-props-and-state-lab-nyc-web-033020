import React from 'react'

class Filters extends React.Component {


  optionChangeValue = e => {
    // console.log(e.target.value)
    // onChangeType(e.target.value)

    //invoke function in app
    this.props.onChangeType(e.target.value)

  }

  render() {
    // console.log(this.props)
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select value={this.props.typeValue} onChange={this.optionChangeValue} name="type" id="type">
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button onClick={this.props.onFindPetsClick} className="ui secondary button">Find pets</button>
        </div>
      </div>
    )
  }
}

export default Filters
