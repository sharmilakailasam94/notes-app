const http=require('http')
const url='http://api.weatherstack.com/current?access_key=ef315ffada29fae916ee613563147efb&query=40.7088,-75.1545'
 const request=http.request(url,(response)=>
{ let data=''
response.on('data',(chunk)=>
{    data=data+chunk.toString()
    //console.log(chunk)

})
response.on('end',()=>
{
    const body=JSON.parse(data)
console.log(body)
})
})
request.on('error',(error)=>
{
    console.log('An Error',error)

})
request.end()