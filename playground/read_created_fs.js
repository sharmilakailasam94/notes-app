const fs=require('fs')
const databuffer=fs.readFileSync('i_json.json')  // file i_ison_json has properties of an object

// console.log(databuffer) 
// while running above statement in terminal doesn't get a data instead,
// u get a binary representation of the object
//again go ahead and convert it as a string 

console.log(databuffer.toString())   //object to string by calling  string method

// now in terminal u get a data 
//this is how we  read i_json.json file  usind fs module

conststring=databuffer.toString() 

const back_json=JSON.parse(conststring)   
console.log(back_json.title)
console.log(back_json.author)