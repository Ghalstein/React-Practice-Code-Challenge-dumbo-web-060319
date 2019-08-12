import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

	state = {
		allSushi: [],
		eaten: [],
		index: 0,
		loaded: false
	}

	showSushi = () => {
		if (this.state.allSushi.length > 0) {
			let count = this.state.index;
			let sushi = [];
			while (count < (this.state.index + 4)) {
				sushi.push(this.state.allSushi[count++])
			}
			return sushi;
		}
		return this.state.allSushi;
	}

  render() {
    return (
      <div className="app">
      	{this.state.loaded ? <SushiContainer  sushi={this.showSushi()}/> : <h1>Loading...</h1>}
        
        <Table />
      </div>
    );
  }

  componentDidMount = () => {
		fetch(API)
		.then(res => res.json())
		.then(allSushi => this.setState({...this.state, allSushi, loaded: true}))

	}
}

export default App;