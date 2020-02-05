import React from "react";
import { Route, Redirect, withRouter } from "react-router-dom";

//import Searchbar from "../../components/main/searchbar";

import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import Main from "../../components/main/main";
import FestivalElJem from "../festdjem/listespectdjem";
import Festivalcarthage from "../festcarthage/listespectcarthage";
import Festivalhammamet from "../festhammamet/listespecthammamet";
import Festivalbizerte from "../festbizerte/listespectbizerte";
import login from "../authentification/signin";
import Signup from "../authentification/signup";
import Contact from "../contact/contact";
import Reservation from "../reservation/reservation";
import lieub from "../festbizerte/lieub";
import lieuh from "../festhammamet/lieuh";
import lieuc from "../festcarthage/lieuc";
import lieud from "../festdjem/lieud";
import envoyer from "../authentification/signin";
import events from "../../pages/event/event"
import listevents from "../../pages/event/listevents"

import "bootstrap/dist/css/bootstrap.min.css";
// import "./home.css";

const authService = {
	isAuthenticated() {
		const tok = localStorage ? localStorage : null;
		if (tok.length !== 0) {
			return true;
		}
		return false;
	}
};

function HomePage({ history }) {
	const logout = () => {
		localStorage.clear();
		history.push("/");
	};

	return (
		<div>
			<div className="container">
				<Navbar location={history.location} logout={logout} isLoged={authService.isAuthenticated()} />
			</div>
			<Route exact path="/" component={Main} />
			<Route path="/login" component={login} />
			<Route path="/signup" component={Signup} />
			<Route path="/festival-el-jem" component={FestivalElJem} />
			<Route path="/festival-carthage" component={Festivalcarthage} />
			<Route path="/festival-hammamet" component={Festivalhammamet} />
			<Route path="/festival-bizerte" component={Festivalbizerte} />
			<Route path="/contact" component={Contact} />
			<Route path="/reservation" component={Reservation} />
			<Route path="/lieub" component={lieub} />
			<Route path="/lieuc" component={lieuc} />
			<Route path="/lieuh" component={lieuh} />
			<Route path="/lieud" component={lieud} />
			<Route path="/addevent" component={events}/>
			<Route path="/listevents" component={listevents}/>
			<Route path="/envoyer" component={envoyer} />
			<Footer />
		</div>
	);
}
const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route
		{...rest}
		render={props =>
			authService.isAuthenticated() ? (
				<Component {...props} />
			) : (
				<Redirect
					to={{
						pathname: "/",
						state: { target: props.location }
					}}
				/>
			)}
	/>
);
export default withRouter(HomePage);
