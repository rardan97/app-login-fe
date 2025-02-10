import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/api/role";
const api = axios.create({
    baseURL: REST_API_BASE_URL,
    withCredentials: true,
  });

// export const listRole = (token) => api.get('/getAllRole' ,{
    
//     headers: {
//         'Authorization': 'Bearer '+token
//     },
// })


export const listRole = (token) => {
    try {
        const response = api.get("/getAllRole", {
          headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer '+token
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


export const getValueById = (token, roleId) => {
    try {
        const response = api.get("/getRoleById/" + roleId, {
          headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer '+token
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

export const createRole = (token, role) => {
    try {
        console.log(role)
        const response = api.post("/createRole", role, {
          headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer '+token
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

export const updateRole = (token, roleId, role) => {
    try {
        console.log(role)
        const response = api.put("/updateRole/"+roleId, role, {
          headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer '+token
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

export const deleteRole = (token, roleId) => {
    try {
        // console.log(role)
        const response = api.delete("/deleteRole/"+roleId, {
          headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer '+token
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


// export const deleteRole = (token, roleId) => axios.delete(REST_API_BASE_URL +'/deleteRole/'+roleId ,{
//     headers: {
//         'Authorization': 'Bearer '+token,
//     },
// });