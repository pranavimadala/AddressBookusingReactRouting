
import * as React from "react";
import { HomeComponent } from "./components/HomeComponent";
import { BrowserRouter as Router, Route} from "react-router-dom";
import { FormComponent } from "./components/FormComponent";
import { DetailComponent } from "./components/DetailComponent";
export class App extends React.Component{
	render(){
		return (<Router>
			<Route path='/' component={HomeComponent}/>
			<Route path='/form' component={FormComponent}/>
			<Route  path='/form/:id' component={FormComponent }/>
			<Route path="/details/:id" component={DetailComponent}/>
			</Router>
			)
	}
}