const request=require('request');

//Toronto Weather
const url= "http://api.weatherstack.com/current?access_key=1cf99347ca0a03c7ed40e29ec1935609&query=+43.6532,-79.3832"
//const url = "https://api.darksky.net/forecast/0af22b7c77bddf1e717288e5e34852fe/37.8267,-122.4233";

request({url:url, json:true} ,(error, response)=>{
    console.log("It is currently "+response.body.current.temperature+". It feels like "+response.body.current.feelslike+".")
    
});

