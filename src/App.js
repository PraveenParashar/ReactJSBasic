import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div><div class="MenuBar"> <MenuBar /> </div>
      <div className="App">
       <Header></Header>
       <Content></Content>
       <Footer/>
      </div>
      </div>
    );
  }
}
class Header extends React.Component {
  render() {
     return (
        <div>
           <header>
       <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React </h1>
         </header>
        </div>
     );
  }
}
class Content extends React.Component {
  render() {
     return (
        <div>
           <p className="App-intro">
         Content Will Come here
        </p>
        </div>
     );
  }
}
class Footer extends React.Component {
  render() {
     return (
        <div>
           <p className="App-intro">
        Footer
        </p>
        </div>
     );
  }
}
class MenuBar extends React.Component {
  render () {
              return (
                <div>
                  <ul>
                    <li>Home</li>
                    <li>AboutUS</li>
                    <li>ContactUS</li>
                  </ul>
                </div>
              );
            }
 }

export default App;

