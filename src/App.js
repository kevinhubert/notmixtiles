import React, {useState} from 'react';
import './App.scss';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      images:[]
    }
  }

  addImage = () => {
    const randomNumber = (Math.floor(Math.random() * 100) + 100);
    const newImage = `https://placekitten.com/${randomNumber}0/${randomNumber}0`
    console.log(this.state)
    const newList = [...this.state.images, newImage]
    this.setState({images:newList})
  }
  removeImage = () => {
    const newList = [...this.state.images].slice(0,-1);
    this.setState({images: newList})
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
                <div className="col-md-3" key={index}>
                  <div className="tile">
                    <img src={image} alt=""/>
                    <div className="remove" onClick={this.removeImage}>
                      <div className="remove__text">
                      Remove Image</div>
                    </div>
                  </div>
                </div>
              ))
            }
            <div className="col-md-3">
              <div className="tile-upload" onClick={this.addImage}>
                <svg width="59" height="59" viewBox="0 0 59 59" fill="none"><rect x="24.6003" y="0.107956" width="10.2462" height="58.1695" rx="5.1231" fill="#FF0077"></rect><rect x="58.8083" y="24.0696" width="10.2462" height="58.1695" rx="5.1231" transform="rotate(90 58.8083 24.0696)" fill="#FF0077"></rect></svg>
              </div>
            </div>
            </div>
          </div>
        </div>
      <div className="advance">
        <button className="btn btn-lg btn-primary" type="button">Continue to Checkout</button>
      </div>
    </div>
    );
  }
}

export default App;
