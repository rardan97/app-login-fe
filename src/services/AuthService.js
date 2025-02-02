import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/api/auth";
// const token = localStorage.getItem("accessToken");
const api = axios.create({
  baseURL: REST_API_BASE_URL,
  withCredentials: true,  // Jika perlu mengirimkan cookies
});

// export const signin = (login) => api.post(REST_API_BASE_URL + '/signin', login);


export const signup = (register) => axios.get(REST_API_BASE_URL + '/signup' + register);

export const refreshtoken = (refreshtoken) => axios.get(REST_API_BASE_URL + '/refreshtoken' + refreshtoken);

// export const signout = () => axios.post(REST_API_BASE_URL + '/signout');


export const signout = (token) => {
    return axios.post(REST_API_BASE_URL + '/signout', {}, {
      headers: {
        'Authorization': 'Bearer '+token,
      },
    });
  };


  export async function checkSessionToken(refreshToken) {
    try {
        const response = await api.post("/refreshtoken", {refreshToken}, {
          headers: {
              'Content-Type': 'application/json'  // Pastikan menggunakan JSON
          }
      });
        console.log(response);
        return response;  // Mengembalikan data dari response
    } catch (error) {
        console.error("Error during session check:", error);  // Gunakan error di sini untuk logging
        localStorage.removeItem("accessToken");
        throw new Error("Login failed");
    }
}

export async function signin(userDataLogin) {
    try {
        const response = await api.post("/signin", userDataLogin);
        return response.data;  // Mengembalikan data dari response (seperti accessToken)
    } catch (error) {
        console.error("Error during session check:", error);  // Gunakan error di sini untuk logging
        localStorage.removeItem("accessToken");
        throw new Error("Login failed");
        
    }
}
  

