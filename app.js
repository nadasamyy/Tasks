const mongodb = require("mongodb")
const MongoClient = mongodb.MongoClient 
const connectionurl = "mongodb://127.0.0.1:27017"
const dbname = "project1"
MongoClient.connect(connectionurl , (error , data) =>{
    if(error){
        return console.log("failed to connect data base")
    }
    console.log("success to connect")
    const db = data.db(dbname)
    ////////////////////////////////
    db.collection("users").insertOne({
        name : "nada" , 
        age : 21
    } , (error ,data) =>{
        if(error){
            console.log("failed inserted")
        }
        console.log(data.insertedId)
    })
    ////////////////////////////////////////////
    db.collection("users").insertOne({
        name : "mady ",
        age :22
    }  , (error , data) =>{
        if(error){
         console.log("failed to insert")
        }
        console.log(data.insertedId)
    })

    ///////////////////////////////////////////
    db.collection("users").insertMany(
        [
            {
                name : "islam " , 
                age : 25
            } , 
            {
                name :"wael" , 
                age : 30
            } , 
            {
                name : "rana" , 
                age : 25
            } , 
            {
                name : "tamer" , 
                age : 25
            } , 
            {
                name : "amr" , 
                age : 25
            } , 
            {
                name : "mahmoud" , 
                age : 25
            } , 
            {
                name : "rana" , 
                age : 40
            } , 
            {
                name : "hashem" , 
                age : 50
            } ,  {
                name : "nader" , 
                age : 33
            } , 
            {
                name : "gazer" , 
                age : 35
            } , 
        ] , (error , data)=>{
            if(error){
                console.log("failed to insert")
            }
            console.log(data.insertedIds)
        }
    )
      ////////////////////////////////
      /*db.collection("users").find({age:25}).toArray((errorr , data)=>{
        if(errorr){
         console.log("failed to find it")
        }
        console.log(data)

      })
      db.collection("users").find({age:25}).limit(3).toArray((errorr , data)=>{
        if(errorr){
         console.log("failed to find it")
        }
        console.log(data)

      })
      */
      //////////////////////////////////////////////////////////
      /*
      db.collection("users").updateOne({_id:mongodb.ObjectId("64db2064825052e7fd40635c")}, {
        $set : {name : "ramez"} , 
        $inc : {age : 20 }
      } , (error , data) =>{
        if(error){
            console.log("cant update")
        }
        console.log(data)
        
      })*/
      ///////////////////////////////////////////////
      /*
      db.collection("users").updateMany({} , {
        $inc : {age : 10}
      }  ,(error , data) =>{
        if(error){
            console.log("cant update")
        }
        console.log(data.modifiedCount)
    })
    */
    ///////////////////////////////////////////
    db.collection("users").deleteMany({age:45} )
    .then((data)=>{console.log(data.deletedCount)})
    .catch((error) =>{console.log(error)})
}
)

