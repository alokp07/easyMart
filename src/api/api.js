import { commonAPI } from "./commonAPI";

const BASE_URL =  'https://interview-plus.onrender.com';

export const getItems = async()=>{
    return await commonAPI('GET',`${BASE_URL}/api/items`,"","")
}

export const registerUser = async(body)=>{
    return await commonAPI("POST",`${BASE_URL}/api/register`,body,"")
}

export const loginUser = async(body)=>{
    return await commonAPI("POST",`${BASE_URL}/api/login`,body,"")
}


export const updateUser = async(body,header)=>{
    return await commonAPI("PUT",`${BASE_URL}/api/update-user`,body,header)
}

export const deleteUser = async(header)=>{
    return await commonAPI("DELETE",`${BASE_URL}/api/delete-user`,"",header)
}

export const verifyUser = async(header)=>{
    return await commonAPI("GET",`${BASE_URL}/api/protected`,"",header)
}