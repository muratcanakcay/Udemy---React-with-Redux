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
    return (
      <div>
        Latitude: {this.state.lat}
        <br />
        Error: {this.state.errorMessage}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
