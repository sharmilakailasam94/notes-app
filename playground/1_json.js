const fs=require('fs')
const book={                      // book is an object 
    title:'The Secret',
    author:'rhonday byrene'
}

// (now the object is passed as an argument as the filesystem only works with a string 
//so,we convert it to string
// so we gonna save in a file using filesystem module)

const bookJSON=JSON.stringify(book)   // now the object book is converted to string  
console.log(bookJSON) 

//console.log(bookJSON.title)  //-----> this statement doesn't make sense as bookjson is a converted string
//so we cannot call a title property using the string bookjson,if we run it we get undefined in terminal.
 
const parsedata=JSON.parse(bookJSON) 

 // to get properties of the object, parse the string back to object
 //bookJSON now becomes an object. now by calling (parsedata an converted object)
 // we can access the properties of the book.

 console.log(parsedata.title) // its valid now
 console.log(parsedata.author)

fs.writeFileSync('i_json.json',bookJSON) // ........creating file using 'fs' module

 //we passing bookJSON as an argumenr,as the file system knows only string.
 // dont pass the objects here parseindata(object) id invalid 


