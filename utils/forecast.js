const request=require('request')

const forecast=(lat,long,callback)=>{
    const url="http://api.weatherstack.com/current?access_key=1cf99347ca0a03c7ed40e29ec1935609&query="+lat+","+long
    request({url:url, json:true} ,(error, response)=>{
        if(error){
            callback("No internet connection.",undefined)
        }else if(response.body.error){
            callback("Location not found",undefined)
        }else{
            callback(undefined,response.body.current.weather_descriptions+' It is currently '+response.body.current.temperature+'. It feels like '+response.body.current.feelslike+'.')
        }
    });
}
module.exports=forecast
