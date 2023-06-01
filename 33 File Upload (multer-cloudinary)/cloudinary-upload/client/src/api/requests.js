import { BASE_URL } from "./base_url";
import axios from 'axios';

export const getAll = async()=>{
    let globalData;
    await axios.get(`${BASE_URL}/characters`)
    .then((res)=>{
        globalData = res.data;
    })

    return globalData
}

export const postCharacter = (payload)=>{
    axios.post(`${BASE_URL}/characters`,payload);
}