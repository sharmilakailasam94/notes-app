const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js');


//customize yargs version
yargs.version('1.1.0')

// add, remove, read, list  
//yargs is a package which helps parsing argv inputs and setting up commands
//argv is an array which holds the commandline args we have set up
//creating basic commands with yargs by passing our options object to the command method of yargs

// create add command 
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: { //its value is an object
        title: {
            describe: 'Note title', //adding describe option
            demandOption: true,      //make the option mandatory
            type: 'string'           //make sure the provided input is a string
        }, 
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {          //function that adds a note when add cmd is used
        notes.addNote(argv.title, argv.body)
    }
})

//create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function () {
        console.log('Removing the note')
    }
})

//create list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler: function () {
        console.log('Listing all notes')
    }
})

//create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function () {
        console.log('Reading a note')
    }
})

yargs.parse() // the parsed version of process.argv

 