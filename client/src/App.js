import React, {Component} from 'react';
import './App.css';
import Btn from './components/Button'
import Header from './components/Header';
import Card from './components/Card';



class App extends Component {
  
  render() {
  return (
    <div className="App">
      <Header />
      <Btn />
     
      <Card />
    </div>
  );
}

}
export default App;
