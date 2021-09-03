import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Add from "./screens/Add";
import Details from "./screens/Details";
import Home from "./screens/Home";

function App() {
  const [data, setdata] = useState({});
  return (
    <Router>
      <Switch>
        <Route path="/add">
          <Add data={data} setdata={setdata} />
        </Route>
        <Route path="/details/:item">
          <Details />
        </Route>
        <Route exact path="/">
          <Home data={data} setdata={setdata} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
