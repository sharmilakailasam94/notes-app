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
yargs.command({
    command:'list',
    describe:'Listing the Titles',

        handler(){
            notes.listnotes()
        }

})
yargs.command({
    command:'read',
    describe:'Reading Notes',
    builder:
    {
        title:
        {
            describe:'reading notes',
            demandOption:true,
            type:'string'
        },
        /*body:
        {
            describe:'reading notes',
            demandOption:false,  // only add body in builder if you need to get title in the terminal 
            type:'string' 
        }*/

    },
    handler(argv){
            notes.readnotes(argv.title)
        }
})


yargs.parse()      // yargs.argv() this does the same work
