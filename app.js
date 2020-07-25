const request=require('request');
const geocode=require('./utils/geocode')
const forecast=require('./utils/forecast')
//Toronto Weather
const url= "http://api.weatherstack.com/current?access_key=1cf99347ca0a03c7ed40e29ec1935609&query=+43.6532,-79.3832"


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


