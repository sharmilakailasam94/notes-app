// object property shorthand
const name='sharmila' // used below as an object property
const userage='27'//used below as an object property
const user={
    //name:name,// normal property
    name, // when property name and its assigned variable name is same just use its name
    //shorthand syntax 
    age:userage,
    location:'tamil nadu'
}
console.log(user)

// object destructing
 const product={
    label:'red notebook',
    price:20,
    stock:122,
    saleprice:undefined,
    ordered:4}
 /*
const label=product.label
const stock=product.stock
above 2 staments which usually use to acess its property
we usually use objectname.its property name to access
but its complex to write to access many property
when  there is huge number of property, to replace the complex task to simpler we use destructing
below are some example of using destructing

*/
//const{label,price,stock,rating}=product //(included rating an not defined property)
//const{label:productlabel,price,stock,rating}=product
//const{label:productlabel,price,stock,rating=6,ordered=2}=product 
//even if we define a value in destructing if a property is defined with in a object 
//it takes the value defined only inside the object 
//eg: see ordered=2 but display only 4 as it is defined as ordered:4 within object
// when the rating property is not defined in the object we can use it in above destructing statement
// we can change the label name which we want to call it 
// unlike alias it changes the name
//console.log(productlabel)
//console.log(stock)
//console.log(rating) // program doesn't crash instead it display undefined in terminal
// as rating property is not defined in the object
// const{label:productlabel,price,stock,rating}=product 
//in above stament 1st property is changed label as productlabel which i wish to call it

// we can use destructing while passing object as an argument
// example below
//const transaction=(type,product) usualy we pass object 'product' like this in function
//const transaction=(type,myproduct)// instead using object name we can destruct eg below

const transaction=(type,{label,stock=0,rating=4}={})=> // curly braces is given to reduce an error
//  As error in terminal:Cannot destructure property 'label' of 'undefined' as it is undefined.
//when no value is passed during function call
{
console.log(type,label,stock,rating)

}
transaction('order')   //1st call doesn't pass any object 
// so out of all properties of the above function, stock takes value 0
transaction('order',product) // 2nd call passed product object
// so out of all propeties of the above function, stock takes value =value already defined inside its object.