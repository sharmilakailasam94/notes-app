const square1=function(x)   // This is an example of normal function
 {
 return x*x
}
/*.........................*/

 const square2=(x) =>{   // This is an example of arrow function  
    return x*x
}
/*.........................*/

const square3=(x) => x*x // This is an example of an arrow function where return keyword is not needed
// a simple arrow function
console.log(square1(3),square2(4),square3(5))

/*.........................*/

const event={
    name:'Birthday Party',
    guestList: ['andrew','jen','mike'],
    printGuestList()       /* standard function , used method name as a
     direct function name followed by argument list 
     we couldn't use this.name multiple times so we have to use this =that whene using 
     normal function using function keyword in forEach(function(guest)*/
    {
        //this=that but we reduce the task by using arrow function 
        console.log('Guest List for '+ this.name)                   

        this.guestList.forEach((guest) =>{   // arrow function (instead this=that) 
            console.log(guest+' is attending '+this.name)  
            //here this.name is accessed from a parent function 

        })
    }
}

     event.printGuestList()
//..................................

/*const event1={ 
    
    name:'New Year Party',
    printGuestList: ()=>
    {
        console.log('Guest List for '+ this.name)
    }
}
event1.printGuestList()

 [note: we cannot use arrow function because it doen't has the access to method or properties 
 of an object used a function, this will show undefined in terminal]
*/
