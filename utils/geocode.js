const request = require('request')
const geocode=(address,callback)=>{
    const url="https://api.mapbox.com/geocoding/v5/mapbox.places/"+encodeURIComponent(address)+".json?access_token=pk.eyJ1IjoiZGFya2hvdGRvZyIsImEiOiJja2QyMnZqcDUwYmZ2MnhwNTM3Zzh4b2pzIn0.4M9yfbJ5oNFaR9bWjrBikQ&limit=1"
    request({url:url,json:true},(error,response)=>{
        if(error){
            callback("No internet connection.",undefined)
        }else if(response.body.features.length==0){
            callback("Location not found. Try something else.",undefined)
        }else{
            callback(undefined,{
                lat:response.body.features[0].center[1],
                long:response.body.features[0].center[0], 
                location:response.body.features[0].place_name                           
            })
        }
    });
}
/*
geocode('Toronto',(error, data)=>{
    console.log('Error',error)
    console.log('Data',data)
})*/
module.exports=geocode
