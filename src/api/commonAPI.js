import axios from 'axios';

export const commonAPI = async(method,url,data,reqHeader)=>{
    const reqConfig = {
        method,
        url,
        data,
        headers:reqHeader?reqHeader:{"Content-Type":"application/json"}
    }

    return await axios(reqConfig).then((result)=>{
        return result
    }).catch((err)=>{
        return err
    })
}