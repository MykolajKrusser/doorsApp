import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';

import authReducer from './store/reducers/auth';
import doorConstReducer from './store/reducers/doorConstructor';

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const rootReducers = combineReducers({
	auth: authReducer,
	doorConstr: doorConstReducer
})

const stateStore = createStore(rootReducers, composeEnhancers(
  applyMiddleware(thunk)
));


const app = (
	<Provider store={stateStore}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
);

ReactDOM.render(app, document.getElementById('root'));

