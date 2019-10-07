import React from "react";
import Routes from "../../router/Routes";
import Theme from "./theme";

function App() {
  return (
    <Theme>
      <div className="App">
        <Routes />
      </div>
    </Theme>
  );
}

export default App;
