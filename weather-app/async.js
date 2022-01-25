// Basic understanding of Asyncronous and non blocking
//console.log('Syncronous Example, notice order of the msg in terminal')
//console.log('starting')
 //console.log('2 sec')
//console.log('stopping')
//console.log('--------------------------------------------------')

// Asyncronous
console.log('Asyncronous Example')  // notice the order of the msgs in terminal

console.log('starting')
setTimeout(()=> {
    console.log( '2 Second Timer')
},2000)
setTimeout(()=>{
console.log('0 Second Timer'),0}
)
console.log('stopping')




