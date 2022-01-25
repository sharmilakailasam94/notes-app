const request=require('request')
const url='http://api.weatherstack.com/current?access_key=ef315ffada29fae916ee613563147efb&query=11.127123,78.656891&units=f'
request({url:url,json:true},(error,response)=>{
    if(error)
    {
     console.log('Unable to Connect to Weather Service')
    }else if(response.body.error){
    console.log('Unable to find location')
    }else {
          console.log(response.body.location.name,response.body.location.region)
          console.log(response.body.current.weather_descriptions[0]+'. It is currently '+response.body.current.temperature+' degrees out. It feels like '+response.body.current.feelslike+ ' degrees out')
        }
})

const geocodeurl='https://api.mapbox.com/geocoding/v5/mapbox.places/Turaiyur.json?access_token=pk.eyJ1Ijoic2hhcm1pbGFrYWlsYXNhbSIsImEiOiJja3h6cnZranAwMGl3MnFvYmFqOHp2bGI2In0.NvPjr_MjSIcQenerRqhZ3g&limit=1'
request({url:geocodeurl,json:true},(error,response)=>{
    if(error){
        console.log('Unable to Connect to Weather Service')
    }
    else if(response.body.features.length===0)
    {
      console.log('unable to find lat and lon, try with different location')
    }
    else{
    latt=response.body.features[0].center[0]
    long=response.body.features[0].center[1]
    console.log(latt,long)
}

}) 

