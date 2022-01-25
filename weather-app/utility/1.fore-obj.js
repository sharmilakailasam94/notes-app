const request=require('request')
const forecast=(long,latt,callback)=>
{

    const url='http://api.weatherstack.com/current?access_key=ef315ffada29fae916ee613563147efb&query='+long+','+latt+'&units=f'
request({url,json:true},(error,{body})=>
{
    if(error)
    {
        callback('sorry, check your connection no access to web service',undefined)
    }
    else if(body.error)
    {
        callback('unable to find location,try differnt combiations',undefined)
    }
    else{
       // const data={
           // weather_descriptions:body.current.weather_descriptions[0],
            //temp:body.current.temperature,
            //feelslike:body.current.feelslike
        //}
        //callback(undefined,data)
         callback(undefined,body.current.weather_descriptions[0]+'. It is currently '+body.current.temperature+' degrees out. It feels like '+body.current.feelslike+ ' degrees out')
         }

})

}
module.exports=forecast