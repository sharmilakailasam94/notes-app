const chalk=require('chalk')
const yargs=require('yargs')
const getnotes=require('./notes.js')

yargs.version('1.1.0')  // ****customizing the yargs version****

// Creating add command
yargs.command({
    command:'add',
    describe:'add a new note',
    handler: function(){
        console.log('adding a new note')
    }
})
//creating remove command
yargs.command({
    command:'remove',
    describe:'remove a new note', // no need to describe but It's a good idea to describe it.however the result doesn't going  to reflect in the terminal
    handler:function()
    {
        console.log('removing a note') //result
    }
})
//creating list command
yargs.command({
    command:'list',
    describe:'list the notes',
    handler:function()
    {
        console.log('Listing a note') //result
    }
})

//creating read command
yargs.command({
    command:'read',
    //describe:'Reading the notes',  // as mentioned describe is optional i just made it as a comment still result reflects in terminal 
    handler:function()
    {
        console.log('Reading a note') //result
    }
})


console.log(yargs.argv)

