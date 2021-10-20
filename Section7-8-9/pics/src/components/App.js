import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component {
  // getting response from promise with ".then()"
  // onSearchSubmit(term) {
  //   axios
  //     .get("https://api.unsplash.com/search/photos", {
  //       params: { query: term },
  //       headers: {
  //         Authorization:
  //           "Client-ID k_H_587UN1PvBw4Y8F354q4bRUcv_7Nn2EudvDKWyr0",
  //       },
  //     })
  //     .then((response) => {
  //       console.log(response.data.results);
  //     });
  // }

  // alternate method: Async Await:
  async onSearchSubmit(term) {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization: "Client-ID k_H_587UN1PvBw4Y8F354q4bRUcv_7Nn2EudvDKWyr0",
      },
    });

    console.log(response.data.results);
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
