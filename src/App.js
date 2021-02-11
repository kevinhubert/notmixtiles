import React, {useState} from 'react';
import './App.scss';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      images:[]
    }
  }

  handleClick = () => {
    const randomNumber = (Math.floor(Math.random() * 100) + 100);
    const newImage = `https://placekitten.com/${randomNumber}0/${randomNumber}0`
    console.log(this.state)
    const newList = [...this.state.images, newImage]
    this.setState({images:newList})
  }

  render() {
  return (
    <div className="App">
        <h1 className="app-title">Totally Not Mixtiles</h1>
        <div className="container">
        <div className="tiles-container">
        <div className="row">
        {
          this.state.images.map((image, index) => (
            <div className="col-md-3">
              <div className="tile">
                <img src={image} alt="" key={index}/>
                <div className="remove">
                  <div className="remove__text">
                  Remove Image</div>
                </div>
              </div>
            </div>
          ))
        }
        <div className="col-3">
          <div className="tile-upload" onClick={this.handleClick}>
            <svg width="59" height="59" viewBox="0 0 59 59" fill="none"><rect x="24.6003" y="0.107956" width="10.2462" height="58.1695" rx="5.1231" fill="#FF0077"></rect><rect x="58.8083" y="24.0696" width="10.2462" height="58.1695" rx="5.1231" transform="rotate(90 58.8083 24.0696)" fill="#FF0077"></rect></svg>
          </div>
        </div>
        </div>
        </div>
        </div>
        <div className="advance">
        <div class="d-grid gap-2 col-6 mx-auto">
          <button class="btn btn-lg btn-primary" type="button">Continue to Checkout</button>
        </div>
        </div>
      </div>
  );
      }
}

export default App;
