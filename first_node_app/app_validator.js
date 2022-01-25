const validator=require('validator')
const getnotes=require('./notes.js')
const msg=getnotes()
console.log(msg)
console.log(validator.isEmail('sharmila@.com'))

console.log(validator.isURL('ftp://sharmila.org'))