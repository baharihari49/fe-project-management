import axios from "axios";



const baseURL =  'http://localhost:3000/'
const bearerToken = ''

export const getDataFormApi = async ({endpoint} : {endpoint: string}) => {
    try {
        const response = await axios.get(baseURL + endpoint, {
            withXSRFToken: true,
            headers: {
                Authorization: `Bearer ${bearerToken}`
            }
        })
        return response.data
    } catch (error) {
        console.log(error);
    }
}

export const postDataFormApi = async ({endpoint, data} : {endpoint: string, data: object}) => {
    const response = await axios.post(baseURL + endpoint, data, {
        withXSRFToken: true,
        headers: {
            withCredentials: true,
            Authorization: `Bearer ${bearerToken}`,

        }
    })
    return response.data    
} 