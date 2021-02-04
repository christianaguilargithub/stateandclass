import React, {Component} from "react"
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      count: 0, mode:true
    }
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
    this.toggle = this.toggle.bind(this);

  }
  toggle = () => {
    this.setState( prevState => {
    return {
      mode: !prevState.mode
    }
  })
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
  render(){
    let status, modeSwitch
    if(this.state.mode === true){
      status = "Light Mode";
      modeSwitch = "App-header";
    } else {
        status = "Dark Mode";
        modeSwitch = "App-header1";
    }

    return (
      <div className="App">
        <header className={`${modeSwitch}`}>
        <button className="btn" type="submit" onClick={this.toggle }>{status}</button>
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
