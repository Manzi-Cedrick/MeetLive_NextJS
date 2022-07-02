const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
export default async function connectionEstablish (){
    try{
        await mongoose.connect(process.env.db_connect_mongo,()=>{
            console.log("Database successfuly connected")
        })
    }catch(error){
        console.log("Dataabase failure :" ,error.message);
    }
}
