const request=require('request')

const forecast=(lat,long,callback)=>{
    const url="http://api.weatherstack.com/current?access_key=YOUR_ACCESS_KEY="+lat+","+long
    request({url:url, json:true} ,(error, response)=>{
        if(error){
            callback("No internet connection.",undefined)
        }else if(response.body.error){
            callback("Location not found",undefined)
        }else{
            callback(undefined,{
                location:response.body.location.name+", "+response.body.location.region+", "+response.body.location.country,
                forecastData:"Currently "+response.body.current.weather_descriptions+'. It is currently '+response.body.current.temperature+'. It feels like '+response.body.current.feelslike+'.'
            })
        }
    });
}
module.exports=forecast
