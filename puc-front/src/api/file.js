import { apiVersion, basePath } from "./config"


export const getFileApi= (file) =>{ 
    const url  = `${basePath}/${apiVersion}/file/${file}`

    console.log(url);

    return fetch(url)
        .then((response) =>{
            return response.url;
        })
        .catch((err) =>{
            return err.message;
        })
}