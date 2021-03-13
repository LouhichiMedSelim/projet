import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';
import Signup from'./Signup.jsx'
import Login from './Login.jsx';
import Home from './Home.jsx'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view:'signup',
      
    };
  }
  
  changeView(option) {
    this.setState({
      view: option
    });
  }

  render() {
    return (
      <div>
        <div className="nav">
          <span className="logo">Rental Buses</span>
          <span className={this.state.view === 'signup'
            ? 'nav-selected'
            : 'nav-unselected'}
          onClick={() => this.changeView('signup')}>
            SIGNUP
          </span>
          <span className={this.state.view === 'Login'
            ? 'nav-selected'
            : 'nav-unselected'}
          onClick={() => this.changeView('Login')}>
            LOGIN
          </span>
          <span className={this.state.view === 'home'
            ? 'nav-selected'
            : 'nav-unselected'}
          onClick={() => this.changeView('home')}>
            HOME PAGE
          </span>
        </div>

        <div className="main">
          {this.state.view === 'signup'
            ? <Signup/>
            :this.state.view==='home'
            ? <Home />
            : <Login />
          }
        </div>
      </div>
    );
  }
}
export default App