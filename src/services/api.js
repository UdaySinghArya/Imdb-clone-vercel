import axios from 'axios';

//   categoryMovies is async(asynchronous) function
export const categoryMovies=async (API_URL) =>{
    try{
        //It is a get Reequest
        let response = await axios.get(API_URL);
        return response.data;
    }catch (error){
        console.log('Error while calling the API:',error.message);
        return error.response.data;
    }
}