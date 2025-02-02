import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/api/role";
const api = axios.create({
    baseURL: REST_API_BASE_URL,
    withCredentials: true,  // Jika perlu mengirimkan cookies
  });

export const listRole = (token) => api.get(REST_API_BASE_URL + '/getAllRole' ,{
    
    headers: {
        'Authorization': 'Bearer '+token
    },
})


export const getValueById = (token, roleId) => axios.get(REST_API_BASE_URL + '/getRoleById/' + roleId, {
    headers: {
        'Authorization': 'Bearer '+token,
    },
});

export const createRole = (token, role) => axios.post(REST_API_BASE_URL+'/createRole', role, {
    headers: {
        'Authorization': 'Bearer '+token,
    },
});

export const updateRole = (token, roleId, role) => axios.put(REST_API_BASE_URL +'/updateRole/'+roleId, role ,{
    headers: {
        'Authorization': 'Bearer '+token,
    },
});

export const deleteRole = (token, roleId) => axios.delete(REST_API_BASE_URL +'/deleteRole/'+roleId ,{
    headers: {
        'Authorization': 'Bearer '+token,
    },
});