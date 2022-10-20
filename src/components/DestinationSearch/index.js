import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  userInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state
    const eachDeatils = destinationsList.filter(each =>
      each.name.includes(searchInput),
    )

    return (
      <div className="container">
        <h1 className="heading">Destination Search</h1>
        <div className="input-alig">
          <input type="search" onChange={this.userInput} value={searchInput} />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
          />
        </div>
        <ul>
          {eachDeatils.map(each => (
            <DestinationItem key={each.id} destinaionDetails={each} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
