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
		loaded: false,
		schmoney: 200
	}

	showSushi = () => {
		if (this.state.allSushi.length > 0) {
			let count = this.state.index;
			let sushi = [];
			while (count < (this.state.index + 4)) {
				sushi.push(this.state.allSushi[count++]);
			}
			return sushi;
		}
		return this.state.allSushi;
	}

	handleEatenSushi = (sushi) => {
		if (!this.state.eaten.includes(sushi) && (this.state.schmoney - sushi.price >= 0)) {
			this.setState({eaten:[...this.state.eaten, sushi]});
			this.schpendTheSchmoney(sushi.price);
		}
	}

	handleMoreButtonClicked = () => {
		this.setState({index: this.state.index + 4});
	}

	schpendTheSchmoney = (schmon) => {
		this.setState({schmoney: this.state.schmoney - schmon});
	}

  render() {
    return (
      <div className="app">
      	{this.state.loaded ? <SushiContainer handleMoreButtonClicked={this.handleMoreButtonClicked}  eaten={this.state.eaten} handleEatenSushi={this.handleEatenSushi} sushi={this.showSushi()}/> : <h1>Loading...</h1>} 
        <Table emptyPlates={this.state.eaten} schmoney={this.state.schmoney}/>
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