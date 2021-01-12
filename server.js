const express = require('express');
const cors = require('cors');
const app = express();
const axios = require('axios');


app.use(cors());

app.get('/', async(req,res) => {


    try {
        /*🚨🚨🚨🚨🚨🚨🚨 IMPORTANNNNTEEEEE 🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨 */ 
   /*A RESPOSTA DO AXIOS SE CHAMA RESPONSE E TEM UM PARAMETRO "DATA" */ 
   /*ENTÃO const {data} SE REFERE A response.data */ 
   const {data} =  await axios ('https://jsonplaceholder.typicode.com/users');
   console.log(data);

  /* TERIA QUE CONVERTER ASSIM CASO A API JÁ NÃO FOSSE EM JSON */
  /* const data = await response.json */

   return res.json(data)
        
    } catch (error) {

        console.log(error);

    }

   
});

app.listen(4567);