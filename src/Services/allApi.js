import configAxios from "./configAxios"

export const postData = async(reqbody) => {
    return await configAxios('post','http://localhost:3000/metro',reqbody)
}

export const getDetails = async() => {
    return await configAxios('get','http://localhost:3000/metro','')
}

export const deleteApi = async(id) => {
    return await configAxios('delete',`http://localhost:3000/metro/${id}`,{})
}
export const editApi = async(id,reqBody) => {
    return await configAxios('put',`http://localhost:3000/metro/${id}`,reqBody)
}