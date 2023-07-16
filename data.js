  
const data = require ("./app")
const yargs = require("yargs")
yargs.command({
    command : "add",
    describe: "to add people",
    builder: {
        id : {
            describe: "its unique identifier ",
            demandOption: true,
            type: "integer"
        },
       
    },
    handler: (x)=> {
      
       data.addperson(x.fname , x.lname , x.city , x.age,x.id )
    }
 })

 yargs.command({
    command : "delete",
    describe: "to delete an item",
    handler: (x)=> {
    
        data.deleteperson(x.id)
    }
 })

 yargs.command ({
    command : "read",
    describe : "to read data",
    
    handler : (x)=> {
        data.readData (x.id)
    }
 })


 yargs.command ({
    command :"list",
    describe : "list data",
    handler : ()=>{
        data.listperson() ; 
    }
 })
 

yargs.parse() 
   
  
