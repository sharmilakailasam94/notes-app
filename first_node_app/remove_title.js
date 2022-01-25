const chalk=require('chalk')
const yargs=require('yargs')
const notes=require('./notes.js')

yargs.version('1.1.0')  // ****customizing the yargs version****
console.log(notes.getnotes())
// Creating add command
yargs.command({
    
   command:'add',
   describe:'adding a new title',
   builder:{
       title:{
           describe:'adding title',
           demandOption:true,
           type:'string'
       },

   body:{
    describe:'Giving Body content',
    demandOption:true,
    type:'string'
   }
   },
    handler(argv){
        notes.addnotes(argv.title,argv.body)
}   
    
})
yargs.command({
command:'remove',
describe:'Removing Notes',
builder:{
    title:
    { describe:'removing notes',
      demandOption:true,
      type:'string'
    },
    body:
    {
        describe:'removing notes',
        demandOption:true,
        type:'string' 
    }
},
  handler(argv)
  {
   notes.removenotes(argv.title)      
  }

})

yargs.parse()      // yargs.argv() this does the same work
// (parse definition:parse is to break up a sentence or group of words into separate components, 
//including the definition of each part's function or form. ... 
//Parsing is used in all high-level programming languages. 
//Languages like C++ and Java are parsed by their respective compilers 
//before being transformed into executable machine code)
