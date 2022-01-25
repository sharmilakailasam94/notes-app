const fs = require('fs')

const getNotes = function() { 
    return "Your notes...";
}
const addnote = function (title, body) {
    const notes = loadNotes() //load in the notes
    //using the push method to change the notes array (JSON file is an array)
    //notes.push({        //each note is an object
      //  title: title, //set title property the value stored on the title argument (commandline input becoming a parameter of addNote())
       // body: body
   // })
   // saveNotes(notes) //saving the notes array
//}

//helper function to save notes
//const saveNotes = function (notes) {
    //const dataJSON = JSON.stringify(notes)
    //fs.writeFileSync('notes.json', dataJSON)  //not working, no file is created!
}

//helper function which just loads notes
const loadNotes = function() {  
    //this runs if there is a json file
        const dataBuffer = fs.readFileSync('notes.json') //read from notes.json and assign to dataBuffer
        const dataJSON = dataBuffer.toString()  //turn data into string
        return JSON.parse(dataJSON) //return the parsed data
    
    
    
}

//export an object, which can then contain properties of the functions getNotes, addNote, etc
module.exports = { 
    getNotes: getNotes,
    addnote: addnote
}