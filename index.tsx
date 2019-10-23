import * as React from "react";
import * as ReactDOM from "react-dom";
import {App} from './App';
import { BrowserRouter  } from "react-router-dom";
ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById("root"));

// comment in for PWA with service worker in production mode
// registerServiceWorker();
