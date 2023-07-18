import {Component} from 'react'

import './index.css'

import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {text: ''}

  onChangeSearchInput = event => {
    this.setState({text: event.target.value})
  }

  render() {
    const {text} = this.state
    const {destinationsList} = this.props

    const filterResults = destinationsList.filter(each =>
      each.name.toLowerCase().includes(text.toLowerCase()),
    )
    return (
      <div className="bg-container-1">
        <h1 className="heading">DestinationSearch</h1>
        <div className="bg-container-2">
          <input
            type="search"
            className="inputEle"
            onChange={this.onChangeSearchInput}
          />
          <img
            className="img"
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
          />
        </div>
        <ul>
          {filterResults.map(eachItem => (
            <DestinationItem Data={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
