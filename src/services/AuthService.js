import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/api/auth";

const api = axios.create({
  baseURL: REST_API_BASE_URL,
  withCredentials: true, 
});

export const getRoleAll = () =>  axios.get(REST_API_BASE_URL + '/getAllRole');

export const signup = (register) => {
  try{
    console.log(register)
    const response =  api.post('/signup', register);
    return response;
  }catch(error){
    console.error("Error during session check:", error);
  }
};

export async function signin(userDataLogin) {
  try {
      const response = await api.post("/signin", userDataLogin);
      return response;
  } catch (error) {
      console.error("Error during session check:", error);
      localStorage.removeItem("accessToken");
      throw new Error("Login failed");
  }
}

export async function refreshtoken(refreshToken) {
    try {
        const response = await api.post("/refreshtoken", {refreshToken}, {
          headers: {
              'Content-Type': 'application/json'
          }
      });
        console.log(response);
        return response;
    } catch (error) {
        console.error("Error during session check:", error);
        localStorage.removeItem("accessToken");
        throw new Error("Login failed");
    }
}

export const signout = (token) => {
  return axios.post(REST_API_BASE_URL + '/signout', {}, {
    headers: {
      'Authorization': 'Bearer '+token,
    },
  });
};