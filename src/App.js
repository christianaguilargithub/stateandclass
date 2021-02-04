import React, {Component} from "react"
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      count: 0
    }
    this.state.mode = {
      nightmode: true
    }
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
    this.nightmode = this.nightmode.bind(this);
  }

  increase = () => {
    this.setState( prevState => {
      return {
        count: prevState.count + 1
      }
    })
  };

  decrease = () => {
    this.setState(
      prevState => {
        return {
          count: prevState.count - 1
        }
      }
    )
  };

  nightmode = () => {
    this.setState.a(prevState => ({
      nightmode: !prevState.a.check
    }));
  }

  render(){
    let status
    if(this.state.mode.nightmode === true){
      status = "Night Mode";
    } else {
        status = "Day Mode";
    }
    let stat
    if(this.state.mode.nightmode === true){
      stat = "App-header";
    } else {
        stat = "App-header1";
    }
    return (
      <div className="App">
        <header className="{stat}">
        <button className="" type="submit" onClick={this.nightmode}>{status}</button>
          <h1>{this.state.count}</h1>
          <div className="btns">
            <button className="inc" type="submit" onClick={this.increase}>Increase</button>
            <button className="dec" type="submit" onClick={this.decrease}>Decrease</button>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
