import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/api/user";
const api = axios.create({
    baseURL: REST_API_BASE_URL,
    withCredentials: true,
});


export const listUser = (token) => api.get('/getAllUser' ,{
    headers: {
        'Authorization': 'Bearer '+token
    },
})


export const getValueByUsername = (token, username) => api.get('/getValueByUsername/' + username, {
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