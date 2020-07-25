const request=require('request');

//Toronto Weather
const url= "http://api.weatherstack.com/current?access_key=1cf99347ca0a03c7ed40e29ec1935609&query=+43.6532,-79.3832"

request({url:url, json:true} ,(error, response)=>{
    if(error){
        console.log("No internet connection.")
    }else{
        //console.log("Location: "+response.body.location.name)    
        //console.log("Current weather condition: "+response.body.current.weather_descriptions[0])
        console.log("It is currently "+response.body.current.temperature+". It feels like "+response.body.current.feelslike+".")
    } 
});
/*
//Forward geocoding (location ->lat/long)
const geoURL="https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZGFya2hvdGRvZyIsImEiOiJja2QyMnZqcDUwYmZ2MnhwNTM3Zzh4b2pzIn0.4M9yfbJ5oNFaR9bWjrBikQ&limit=1"

request({url:geoURL,json:true} ,(error, response)=>{

    //console.log("Lat: "+response.body.features[0].center[1])
    //console.log("Long: "+response.body.features[0].center[0])
    const lat=response.body.features[0].center[1]
    const long=response.body.features[0].center[0]
    console.log(lat,long)
    console.log("\n")
});
*/
