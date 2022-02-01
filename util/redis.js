
const {createClient } = require("redis");
const client = createClient();

const connectClient = async () =>{

    client.on('error', (err) => console.log('Redis Client Error', err));  
    await client.connect();
    
}



 module.exports = {
  client,
  connectClient,
};
