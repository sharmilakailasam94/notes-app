const geocode=require('./utility/1.geo-object')   
const forecast=require('./utility/1.fore-obj')
const address=process.argv[2]     //getting ser value
console.log(process.argv[2])

if(address)
{
geocode(address,(error,{latt,long,location}={})=> 
{  
    //  instead data object it is destructed with the necessary {object property list}--->
    if(error)
    {
        return console.log(error)
    }
forecast(latt,long, (error, forecastdata) => {
    if(error)
    { 
        return console.log(error)
    }
        console.log(location)
        console.log(forecastdata)

 })
})

}
else{
    console.log('please provide address')
}


