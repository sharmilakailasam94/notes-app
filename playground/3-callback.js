setTimeout(()=>{                  
    console.log('Two secs are up'),2000
})

/*definition :
1. A function uses a another function as an argument is said to be an call back function
2. call back functions are asyncronous however it need not to be an asyncronous all the time 
2.but function uses the call back function pattern within array methods such as filter(()=>{}),
 forEcah(()=>
{}), doesn't be an asynchrous.it is a synchronous
3.understand with below example of fileter method */

const names=['andrew','jen','jess','mark','anto']
const shortnames=names.filter((name)=>

{
return name.length<=3
})




const geocode=(address,callback)=>
{
    setTimeout(()=>{
    const data={
        latt:0,
        long:0
    }
    callback(data)
},2000)
}

geocode('india',(data)=>{
    console.log(data)
})





//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!
const add=(num1,num2,callback)=>
{
setTimeout(()=>{
    callback(num1+num2)
},2000)
}
add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})




/*
1. main goes on the stack
2. geocode goes on the stack
3. request in geocode goes on the stack
4. anonymous function passed to request in geocode goes on the stack
5. callback parameter in geocode goes on the stack
6. forecast function goes on the stack
7. request in forecast goes on the stack
8. anonymous function passed to request in forecast goes on the stack
9. callback parameter in forecast goes on the stack
*/ 
