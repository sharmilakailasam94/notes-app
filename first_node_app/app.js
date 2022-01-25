const chalk=require('chalk')
const yargs=require('yargs')
//const validator=require('validator')
const getnotes=require('./notes.js')
console.log(process.argv)
console.log(yargs.argv)
yargs.version('1.1.0')
//const command=process.argv[2]

//if(command=='add')
//{
  //  console.log('Adding Notes!')
//} 
//else if(command =='remove')
//{

    //console.log('removing notes!')
//}
//const pnt=getnotes()
//console.log(pnt)
//console.log(chalk.bgBlue('This is a blue coloured text'))
//console.log(chalk.blue.bgGreen.inverse('success'))
//console.log(process.argv[2])





//const getnotes=require('./notes.js') 
// the above line is to link entire notes.js file to app.js
//so while executing the app.js it executes every line.
//const pnt=getnotes()
//the above line is used to call a function used in notes.js file that we exported from notes.js
//though we just call getnotes function but we included entire notes.js file 
//thus out put will be app.js follwed by 'this notes linked to app.js from note.js
// open notes.js file for understanding the output

