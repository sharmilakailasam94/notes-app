const fs=require('fs')
const chalk=require('chalk')
const getnotes=()=>{ 
    return ' My notes with diff function'
}
 
 const addnotes=(title,body) =>   // getting the object properties
 {
     const notes=loadnotes()
     const duplicatenotes=notes.filter((note)=> note.title==title)
     // accessing notes object property via note argument
     //  so thats why given diff arg name---->note (argument ---> note is called the no of times, 
     // equal to the object properties, one by one,
     // call and checks first property and return and so on....) 
     
     // above codes are slightly modified using arrow function
     // code below can also be used using normal function
     //const duplicatenotes=notes.filter(function(note)    // using normal function
     //{
     //return note.title==title
     //}
debugger     
     if(duplicatenotes.length==0)
     {
        notes.push({               
            // (adding object properties to object, every time writing the new properties 
           // as we use push method to create new properties )
            title:title,                
            body:body
        }) 
        savenotes(notes) 
        console.log('Title Added Successfully')
     }
     else{
         console.log('Title Already Taken,Try Different One')
     }   
 }
 const removenotes=function(title) 
 {
     const notes=loadnotes()
     const save_diff_note=notes.filter((note)=>
     // using filter method to compare the existing title vs title passed 
     //and save only title doesn't match to the title passed to the new array 
     // and save the notes.
     // pass the new array as argument to the savenotes function to save the note
     {                               
             return note.title!==title
     })
     if(notes.length>save_diff_note.length)
    
    {console.log(chalk.green.inverse('title removed'))
    savenotes(save_diff_note)
    }
    else{
        console.log(chalk.red.inverse('note not found to remove'))
    }

}
        
 const savenotes=(notes)=> // saving to notes
 {  
     const datastr=JSON.stringify(notes)   // convert to string
     fs.writeFileSync('notes.json',datastr)        
     // create notes.json if already exists or append  the contents
     // [Note: here it doesn't overwrite the content on notes.json]
     // as we use push method, it add the new  object property to the object_array,
     // every time we give new (title, body)-->object properties while running in the terminal.

 }

 const listnotes=()=>
 {
    const notes=loadnotes()
    console.log(chalk.green.bgWhite.inverse('Mynote is Listing'))
    notes.forEach((note)=>
    {
        console.log(note.title)
    })
 }
const readnotes=(title)=>
{
    const notes=loadnotes()
    const duplicatenote=notes.find((note)=>note.title===title)
    if(duplicatenote)
    {
        console.log(chalk.bgWhite.magenta.bold.inverse(duplicatenote.title))
        console.log(duplicatenote.body)

    }
    else{
        console.log(chalk.red('No such Record Found'))
    }
}

 const loadnotes=()=>
 {    try{
    const databuffer=fs.readFileSync('notes.json')
     const dataJSON=databuffer.toString()
      return JSON.parse(dataJSON) 
    }
     catch(e)
     {
     return []  
 }
 }
module.exports={
    getnotes: getnotes,
    addnotes: addnotes,
    removenotes:removenotes,
    listnotes:listnotes,
    readnotes:readnotes
} 






// this line helps us to use the function or variable defined in this file
//we can access this module to another file let say app.js by using require('') 
//however we cannot access the variable or function outside this file so we use module.export to resolve this issue