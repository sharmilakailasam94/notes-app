//1..................

const greeting=(name='user',age)=>
{
    console.log('hello '+name)
}
greeting('sharmi','23')  
greeting('sharmi')
greeting()
//2..................
const greet=(name,age)=>
{
    console.log('hello '+name)
} 
greet()
greet('name')

// if u run this program, u will get  hello undefined in the terminal for 1st greeting() call
// hello sharmila in the terminal, for greeting('sharmi') 
// to replace this we give default value for the name in function const greeting=(name='user')
// which will replace with default name even if no value is passed
// compare 1st and 2nd block of codes for understanding.