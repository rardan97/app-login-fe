import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/api/auth";

export const signin = (login) => axios.get(REST_API_BASE_URL + '/signin' + login);


export const signup = (register) => axios.get(REST_API_BASE_URL + '/signup' + register);

export const refreshtoken = (refreshtoken) => axios.get(REST_API_BASE_URL + '/refreshtoken' + refreshtoken);

export const signout = () => axios.get(REST_API_BASE_URL + '/signout');

