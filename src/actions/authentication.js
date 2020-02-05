import axios from "axios";
import { GET_ERRORS } from "./types";

export const registerUser = (user, history) => dispatch => {
	axios
		.post("/api/users/register", user)
		.then(res => history.push("/login"))
		.catch(err => {
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data
			});
		});
};

export const loginUser = (user, history) => dispatch => {
	axios
		.post("/api/users/login", user)
		.then(res => {
			res.data.success && localStorage.setItem("token", res.data.token);
			history.push("/reservation");
			return res;
		})
		.catch(err => {
			dispatch({
				type: GET_ERRORS,
				payload: err.response
			});
		});
};
