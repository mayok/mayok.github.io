import * as React from "react";

import Header from "./Header";
import Articles from "./Articles";

class App extends React.Component {
  render() {
    return (
      <div className="main">
        <Header />
        <Articles />
      </div>
    );
  }
}

export default App;
