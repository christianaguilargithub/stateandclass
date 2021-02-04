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

  nightmode = () => {this.setState(prevState => ({
    nightmode: prevState.nightmode === git 'true' ? 'true' : 'false'
  }));}

  render(){
    let status,head
    if(this.state.mode.nightmode === true){
      status = "Day Mode";
      head = "App-header";
    } else {
        status = "Night Mode";
        head = "App-header1";
    }

    return (
      <div className="App">
        <header className="App-header">
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
