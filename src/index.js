import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router, Link, Switch } from 'react-router-dom';
import ResizeByClass from './ResizeByClass';
import ResizeByHooks from './ResizeByHooks';

const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/class-resize" component={ResizeByClass} />
        <Route path="/hook-resize" component={ResizeByHooks} />
      </Switch>

      <p>
        <Link to="/"><button>top</button></Link>
      </p>

      <p>
        <Link to="/class-resize"><button>class</button></Link>
      </p>

      <p>
        <Link to="/hook-resize"><button>hook</button></Link>
      </p>
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
