const request=require('request');
const geocode=require('./utils/geocode')
const forecast=require('./utils/forecast')
//Toronto Weather
const url= "http://api.weatherstack.com/current?access_key=1cf99347ca0a03c7ed40e29ec1935609&query=+43.6532,-79.3832"

geocode('Boston',(error, data)=>{
    console.log('Error',error)
    console.log('Data',data)
    forecast(data.lat,data.long,(error,data)=>{
        console.log('Error',error)
        console.log('Data',data)
    })
})



