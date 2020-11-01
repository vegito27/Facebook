import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,withRouter
} from 'react-router-dom';
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import firebase from './firebase'
import 'semantic-ui-css/semantic.min.css'

import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {compooseWithDevTools} from 'redux-devtools-extension'


const store=createStore(()=>{},compooseWithDevTools)

class Root extends React.Component{

	componentDidMount(){

		firebase.auth().onAuthStateChanged(user=>{

			if(user){
				this.props.history.push('/')
			}
		})

	}

	render(){
		return( 
			<Switch>
				<Route exact path="/" component={App} />
				<Route exact path="/login" component={Login} />
				<Route exact path="/register" component={Register} />
			</Switch>)
		}
	}

const RootWithAuth=withRouter(Root) 

ReactDOM.render(
  <Provider store={store}>
	  <Router >
		  <RootWithAuth />
	  </Router>  
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
  } else {
    // No user is signed in.
  }
});