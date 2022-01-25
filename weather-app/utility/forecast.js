const request=require('request')
const forecast=(latt,long,callback)=>
{

    const url='http://api.weatherstack.com/current?access_key=ef315ffada29fae916ee613563147efb&query='+latt+','+long+'&units=f'
request({url:url,json:true},(error,response)=>
{
    if(error)
    {
        callback('sorry, check your connection no access to web service',undefined)
    }
    else if(response.body.error)
    {
        callback('unable to find location,try differnt combiations',undefined)
    }
    else{
        //const data={
           // weather_descriptions:response.body.current.weather_descriptions[0],
           // temp:response.body.current.temperature,
            //feelslike:response.body.current.feelslike
       // }
        //callback(undefined,data)
         callback(undefined,response.body.current.weather_descriptions[0]+'. It is currently '+response.body.current.temperature+' degrees out. It feels like '+response.body.current.feelslike+ ' degrees out')
         }

})

}

//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

/* forecast(-75.7088, 44.1545, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
  })
 */  
module.exports=forecast