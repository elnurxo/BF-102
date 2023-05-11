import axios from "axios";
import { BASE_URL } from "./base_url";

//GET ALL EMPLOYEES
export const getAllEmployees = async()=>{
    let globalData;
    await axios.get(`${BASE_URL}/employees`)
    .then(res=>{
        globalData = res.data;
    });
    return globalData;
}
//GET EMPLOYEE BY ID
export const getEmployeeByID = async(id)=>{
    let globalData;
    await axios.get(`${BASE_URL}/employees/${id}`)
    .then(res=>{
        globalData = res.data;
    });
    return globalData;
}
//DELETE EMPLOYEE BY ID
export const deleteEmployeeByID = (id)=>{
    axios.delete(`${BASE_URL}/employees/${id}`)
}
//POST NEW EMPLOYEE
export const postEmployee = (newEmployee)=>{
    axios.post(`${BASE_URL}/employees`,newEmployee)
}
//PUT EMPLOYEE BY ID
export const putEmployeeByID = (id,updatedEmployee)=>{
    axios.put(`${BASE_URL}/employees/${id}`,updatedEmployee)
}

//get All Users
export const getAllUsers = async()=>{
    let globalData;
    await axios.get(`${BASE_URL}/users`).then(res=>{
        globalData = res.data;
    });
    return globalData;
}