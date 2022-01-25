const request = require('request')
const geocode=(address,callback)=>
{
    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1Ijoic2hhcm1pbGFrYWlsYXNhbSIsImEiOiJja3h6cnZranAwMGl3MnFvYmFqOHp2bGI2In0.NvPjr_MjSIcQenerRqhZ3g&limit=1'
    request({url, json:true},(error,response)=> 
    {//  here url is shorthanded as the property is same as variable assigned value
        // response is destructed used inner object -->body.
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
           latt:response.body.features[0].center[1], // 2nd element in the features array is lattitude
           long:response.body.features[0].center[0], // features[0].center[0]-->1st element
                                                     //make sure you use proper index for latt and long
            location:response.body.features[0].place_name
                  }
                  callback(undefined,data)
        //callback(undefined,(response.body.features[0].center[0]+','+response.body.features[0].center[1]+
           //  ','+response.body.features[0].place_name)) // my undersatnding
            }

         })
}

//geocode('new york',(error,data)=>
//{
//console.log('error',error)
//console.log('data',data)    
//})

module.exports=geocode