const request=require('request');
const geocode=require('./utils/geocode')
const forecast=require('./utils/forecast')

if(process.argv[2]!=null){
    geocode(process.argv[2],(error, data)=>{
        if (error){
            return console.log(error)
        }
        forecast(data.lat,data.long,(error,data)=>{
            if(error){
                return console.log(error)
            }
            //console.log('Error',error)
            console.log(data.location)
            console.log(data.forecastData)
        })
    })
}else{
    console.log("To query the weather of certain city, execute in terminal:")
    console.log("node app.js \"CITY, PROVINCE\"")
}





