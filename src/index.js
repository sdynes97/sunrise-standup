import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

app.use(express.static(__dirname));

app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

// An color-customized version of the Bulma CSS Framework
// (https://bulma.io)
import "./site.scss";

ReactDOM.render(<App />, document.getElementById("root"));
