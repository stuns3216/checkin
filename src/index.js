import React from "react";
import ReactDOM from "react-dom";
import { applyMiddleware, createStore, compose } from "redux";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import 'antd/dist/antd.css';
import thunkMiddleware from "redux-thunk";

import * as serviceWorker from "./serviceWorker";
import rootReducer from "./reducers";
import Home from "./pages/home-page/home-page";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

const middlewareEnhancer = applyMiddleware(thunkMiddleware);
const composedEnhancers = compose(middlewareEnhancer);

const store = createStore(rootReducer, undefined, composedEnhancers);
// Index using Redux and React Router 
ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<Home />
		</BrowserRouter>
	</Provider>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
