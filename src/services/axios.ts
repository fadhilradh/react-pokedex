import Axios from "axios";
import { HTTP_METHODS } from "../globals";


const axios = Axios.create({
    baseURL: 'https://pokeapi.co/api/v2'
})

type CreateApi {
    url: string,
    method: HTTP_METHODS,
    data: any,
}

export async function createApiRequest({url, method, data} : CreateApi) {
    try {
        const response = await axios({
            url, 
            method, 
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            }, 
            data
        })
        return response.data
    } catch(err) {
        console.error(err)
        throw new Error(err)
    }
}