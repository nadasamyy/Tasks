const fs = require("fs") ; 
const alldata = require("./alldata")
const addperson = (fname , lname , age , city , id) =>{
    const alldata = loadData() //obj
    alldata.push ({
        fname :fname , 
        lname :lname , 
        age:age , 
        city:city,
        id : id 
    })
    savedata(alldata)
}
const loadData = ()=>{ //load el data in json
    try{
    const jsonfile =  fs.readFileSync("data.json").toString();
    return JSON.parse(jsonfile);
    }
    catch {
       return []
    }
}
 
const savedata = (alldata)=>{ //obj to json
    const savejsondata = JSON.stringify(alldata)
    fs.writeFileSync("data.json" , savejsondata)
}
const deleteperson = (id) =>{
  const alldata = loadData() ; 
  const tracedata = alldata.filter((obj) =>{
    return obj.id != 4 && obj.id !=6
  })
  console.log(tracedata)
  savedata(tracedata)
}
const listperson =() =>{
    const alldata = loadData() ; 
    alldata.forEach((obj) =>{
        console.log(obj.fname , obj.lname , obj.city)
    });
}
const readData = (id) =>{
    const alldata = loadData() ; 
    const wanteddata = alldata.find((obj)=>{
        return obj.id == 5 
    })
    console.log(wanteddata)
}
module.exports ={
    addperson , 
    deleteperson , 
    listperson , 
    readData 
}