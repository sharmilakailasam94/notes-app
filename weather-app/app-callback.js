//const request = require('request')
const geocode=require('./utility/geocode')  //--->Don't need a file extension to load from a local directory 
const forecast=require('./utility/forecast')
const address=process.argv[2]
console.log(process.argv[2])
/* const geocode=(address,callback)=>  // This is a callback function code block
{
    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1Ijoic2hhcm1pbGFrYWlsYXNhbSIsImEiOiJja3h6cnZranAwMGl3MnFvYmFqOHp2bGI2In0.NvPjr_MjSIcQenerRqhZ3g&limit=1'
    request({url:url, json:true},(error,response)=>
    {
        if(error)
        {
        callback('unable to connect the web service',undefined)
        }
        else if(response.body.features.length==0)
        {
            callback('unable to find location,try another search',undefined)
        }
        else{
        const data={    
            latt:response.body.features[0].center[0],
            long:response.body.features[0].center[1], 
        }
        callback(undefined,data)
}
 

    })
} */

//lecture 37
/*geocode('new york',(error,data)=> // this is a function call of a above commented code
{
console.log('Error: ',error)
console.log('data: ',data)     
})

forecast(-75.7088, 44.1545, (error, data) => {
    console.log('Error: ', error)
    console.log('Data: ', data)
  }) */
// above codes are independent asynchronous code 
//..........................................
//lect


if(!address)
{
    
        console.log('please provide address')
    
}
else
{
geocode(address,(error,data)=> // this is a function call of a above commented code
{
    if(error)
    {
        return console.log(error)
    }
//console.log('Error: ',error)
//console.log('data: ',data)      // we dont need this code as we print the datas at the end of the function
forecast(data.latt, data.long, (error, forecastdata) => {
    if(error)
    { 
        return console.log(error)
    }
        console.log(data.location)
        console.log(forecastdata)

 })
})

}


