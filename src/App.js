import React, { Component } from 'react'
import './App.css';
import Lottery from './Lottery';
import Footer from './Footer';

class App extends Component {
  render() {
	  return (
		<div className="App">
		<h1>Lotto Number Generator</h1>
		<Lottery />
		<p>Numbers: 0 - 49</p>
		<hr/>
		<Lottery title='Bonus Balls' maxNum={10} numBalls={2} />
		<p>Numbers 1 - 10</p>
		<Footer />
		</div>
		
	  );
	}
}

export default App;
