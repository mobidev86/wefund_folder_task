import React from "react";
import FolderStruct from "./components/FolderStruct";
import { BrowserRouter, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Route exact path="/">
          <FolderStruct />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
