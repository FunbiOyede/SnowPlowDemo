
const supertest = require("supertest");
const axios = require('axios').default;


/**
 * @returns {object}
 * 
 */

const clearMicroCache = async () =>{
 const response = await axios.get('http://localhost:9090/micro/reset');
 return response;
}


/**
 * 
 * @returns {object}
 */

 const GetNumberOfEvents = async () =>{   
    const response = await axios.get('http://localhost:9090/micro/all');
   return response.data;
}


/**
 * 
 * @param {number} ms 
 * @returns Promise
 */
const Delay = (ms) => {
     return new Promise( (resolve) => {setTimeout(resolve, ms)});
}
    



module.exports = { clearMicroCache, GetNumberOfEvents, Delay}