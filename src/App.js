import React from 'react'
import axios from 'axios'
import './App.css'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      users: [],
      first_name: '',
      last_name: '',
      email: '',
    }
  }

  componentDidMount() {
    axios.get('/api/users').then((res) => {
      this.setState({
        users: res.data,
      })
    })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSubmit = () => {
    const { first_name, last_name, email } = this.state

    axios.post('/api/users', { first_name, last_name, email }).then((res) => {
      this.setState({
        users: res.data,
      })
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Andrew's list of people</h1>
        <input
          name="first_name"
          onChange={(e) => this.handleChange(e)}
          placeholder="First"
        />
        <input
          name="last_name"
          onChange={(e) => this.handleChange(e)}
          placeholder="Last"
        />
        <input
          name="email"
          onChange={(e) => this.handleChange(e)}
          placeholder="Email"
        />
        <button onClick={this.handleSubmit}>Submit</button>
        {this.state.users.map((e) => (
          <p>
            {e.first_name} {e.last_name}
          </p>
        ))}
      </div>
    )
  }
}

export default App
