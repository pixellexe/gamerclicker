import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Cookies from 'universal-cookie';

const cookies = new Cookies();


class Count extends React.Component {


  state: {
    clicks: any;
    perClick: any;
    cost: any;
    autoCost: any;
  };
  

  constructor(props: {}) {
    super(props);

    //states
    this.state = {
      clicks: 0,
      perClick: 1,
      cost: 10,
      autoCost: 100,
    };
    //document.cookie = this.state.clicks;
    //cookies.set('cookieClicks', this.state.clicks , { path: '/' });
  }

  
  //functions

  //counts the clicks
  counting = () => {
    this.setState({ clicks: this.state.clicks + this.state.perClick });
    cookies.set('cookieClicks', this.state.clicks, { path: '/' });
  }
  //doubles the amount per click
  double = () => {
    if (this.state.clicks >= this.state.cost) {
      this.setState({ perClick: this.state.perClick * 2 });
      this.setState({ clicks: this.state.clicks - this.state.cost });
      this.setState({ cost: this.state.cost * 5 })
    }
    else { alert("not enough clicks"); }
  }
  auto = () => {
    if (this.state.clicks >= this.state.autoCost) {
      this.setState({ clicks: this.state.clicks - this.state.autoCost });
      this.setState({ autoCost: this.state.autoCost * 10 });
      cookies.set('cookieClicks', this.state.clicks , { path: '/' });
      setInterval(() => {
        this.setState({ clicks: this.state.clicks + this.state.perClick });
      }, 1000);
    }
    else { alert("not enough clicks"); }
  }
  //output
  render() {
    return (
      <div>
        <h1>clicks: {this.state.clicks}</h1>
        <h2>amount per click: {this.state.perClick}</h2>
        <button className="click" type="button" onClick={this.counting}>click</button>
        <br />
        <button type="button" onClick={this.double}> double amount per click ({this.state.cost}) </button>
        <button type="button" onClick={this.auto}>auto clicker ({this.state.autoCost})</button>
        <h1>{cookies.get('cookieClicks')}</h1>
      </div>
    );
  }
}


ReactDOM.render(<Count />, document.getElementById('root'));
