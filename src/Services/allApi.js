import { baseUrl } from "./BaseUrl"
import configAxios from "./configAxios"


export const postData = async(reqbody) => {
    return await configAxios('post',`${baseUrl}/metro`,reqbody)
}

export const getDetails = async() => {
    return await configAxios('get',`${baseUrl}/metro`,'')
}

export const deleteApi = async(id) => {
    return await configAxios('delete',`${baseUrl}/metro/${id}`,{})
}
export const editApi = async(id,reqBody) => {
    return await configAxios('put',`${baseUrl}/metro/${id}`,reqBody)
}