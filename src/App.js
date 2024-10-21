import {Component} from 'react'
import {v4 as uuid} from 'uuid'
import './App.css'

class App extends Component {
  state = {textContainer: [], getText: ''}

  addText = event => {
    event.preventDefault()
    const {getText} = this.state
    this.setState(prevState => ({
      textContainer: [...prevState.textContainer, {id: uuid(), name: getText}],
      getText: '',
    }))
  }

  getTextInput = event => {
    this.setState({getText: event.target.value})
  }

  render() {
    const {textContainer, getText} = this.state
    console.log(textContainer)
    return (
      <div>
        <h1>Count the characters like a Boss</h1>
        {textContainer.length === 0 ? (
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
              alt="no user inputs"
            />
          </div>
        ) : (
          <ul>
            {textContainer.map(each => (
              <li key={each.id}>
                <p>{each.name}</p>
                <p>{each.name.length}</p>
              </li>
            ))}
          </ul>
        )}
        <form onSubmit={this.addText}>
          <h1>Character Counter</h1>
          <input
            type="text"
            placeholder="Enter the Characters here"
            onChange={this.getTextInput}
            value={getText}
          />
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}

export default App
