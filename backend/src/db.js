import {MongoClient} from "mongodb";

let db; 

async function connectToDB(cb){
    const url = "mongodb+srv://nehaneha7898:Neha7898@neha.6nxymwb.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(url);
    await client.connect();
    db = client.db("crudapp");
    cb();
}

export {db,connectToDB};