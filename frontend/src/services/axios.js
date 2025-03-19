import axios from "axios";

const axiosClient=axios.create({
    // baseURL:'http://localhost:5000/api',
    baseURL: 'https://dummyjson.com',
    timeout:10 * 60 * 1000,
    headers:{
        'Content-type':'application/json',
        'Authorization':'application/json'
    },
});

axiosClient.interceptors.request.use((config)=>{
    config.timeout = 10000;
    return config;
},(error)=>{
    return Promise.reject(error);
});

axiosClient.interceptors.response.use((response)=>{
    return { data: response?.data, status: response?.status };
},(error)=>{
    if(error.response){
        return Promise.reject({data: error?.response?.data, status:error?.response?.status});
    }else if(error.request){
        console.log("Request Error: ", error.request);
        return Promise.reject(false);
    }else{
        alert("Something went wrong (other)");
        return Promise.reject(false);
    }
})

export const getRequest = async(url,param, otherInfo={}) => {
    try{
        const accessToken = localStorage.getItem('access_token');
        const config = {
            ...otherInfo,
            headers: {
                ...otherInfo?.headers,
                'Authorization': `Bearer ${accessToken}`
            },
            params:param,
        };
        return await axiosClient.get(url,config);
    }catch(error){
        console.error("getRequest error: ", error);
        throw error;
    }
}
