import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  // constructor not needed here anymore since we're initializing state outside

  //   constructor(props) {
  //     super(props);
  //   }

  // initialize state outside constructor
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  componentDidUpdate() {
    console.log("My component was just updated - it rerendered");
  }

  // defining a class render method is obligatory in React!
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage} </div>;
    } else if (!this.state.errorMessage && this.state.lat) {
      return <div>Latitude: {this.state.lat} </div>;
    } else return <div>Loading!</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
