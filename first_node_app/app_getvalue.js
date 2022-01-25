const getnotes=require('./notes.js')
const command=process.argv[2]
//console.log(process.argv[2])
console.log(command)

if(command=='add')
{
  console.log('Adding Notes!')
} 
else if(command =='remove')
{

    console.log('removing notes!')
}
