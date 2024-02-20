import mongoose from "mongoose";

// A URI indica o IP, a porta e BD a ser conectado
const uri = "mongodb://localhost:27017";

function conectar(){
    mongoose.connect(uri)
    .then(() => console.log('connected!'));
}

export default conectar;

//
