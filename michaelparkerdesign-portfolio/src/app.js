// App.jsx

import React from "react";

import { BrowserRouter, Route } from "react-router-dom";
import Projects from "./projects.js";
import About from "./about.js";

// import Philips from "./projects/philips.js";
// import Catawiki from "./projects/catawiki.js";

import "./app.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="logo">
          <img src="https://svgshare.com/i/N01.svg" alt="Michael Parker" />
          <span> Michael Parker | UX | UI</span>
        </div>

        <div className="nav">
          <div className="nav-sub">
            <a
              to="chart"
              className="item"
              activeClassName="selected"
              target={"blank"}
              href="https://drive.google.com/file/d/1CAlEY5PZRy29VCtxmL-hHKs3ZqdBQ-jA/view"
            >
              Portfolio
            </a>
            {/* <NavLink to="/Resume" className="item" activeClassName="selected"> */}
            {/* <NavLink to="https://drive.google.com/file/d/1zce3zqqwBLwp18QJy21gn2siVbknzUGN/view" className="item" activeClassName="selected" target="_blank" onClick={(event) => {event.preventDefault(); window.open(this.makeHref("route"));}} /> */}
            {/* <NavLink
              to="https://drive.google.com/file/d/1zce3zqqwBLwp18QJy21gn2siVbknzUGN/view"
              className="item"
              activeClassName="selected"
              target="_blank"
            > */}
            <a
              to="chart"
              className="item"
              activeClassName="selected"
              target={"blank"}
              href="https://drive.google.com/file/d/17BdWKPzD1-RopVvGDUZVyp_HfG38RQfe/view"
            >
              Resume
            </a>
          </div>
        </div>

        <Route exact={true} path="/" component={Projects} />
        <Route exact={true} path="/projects" component={Projects} />
        {/* <Route path="/Resume" component={Resume} /> */}
        {/* <Route path="https://drive.google.com/file/d/1zce3zqqwBLwp18QJy21gn2siVbknzUGN/view" component={Resume} /> */}
        <Route path="/about" activeClassName="is-active" component={About} />

        {/* 
        Making a porfolio is easy writing content is harder :-) 
        <Route exact={true} path="/projects/Philips" component={Philips} />
        <Route exact={true} path="/projects/catawiki" component={Catawiki} /> 
        */}

        <footer>
          <a href="https://codesandbox.io/u/mparker-wm" target="blank">
            CodeSandbox
          </a>
          <a href="https://github.com/mparker-wm" target="blank">
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/mikeparkerdesign/"
            target="blank"
          >
            LinkedIn
          </a>
          <a href="mailto:info@michaelparker.design" target="blank">
            Email
          </a>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
