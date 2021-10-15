import React from "react";
import ReactDOM from "react-dom";

// const App = () => {
//   window.navigator.geolocation.getCurrentPosition(
//     (position) => console.log(position),
//     (err) => console.log(err)
//   );

//   return <div>Latitude: </div>;
// };

class App extends React.Component {
  constructor(props) {
    super(props);

    // initialize state
    this.state = { lat: null, errorMessage: "" };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        // always use setState to update state!
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        // always use setState to update state!
        console.log(err);
        this.setState({ errorMessage: err.message });
      }
    );
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
