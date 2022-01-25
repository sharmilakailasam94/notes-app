const fs=require('fs')
const databuffer=fs.readFileSync('2_json.json')
const data_string=databuffer.toString()
const data=JSON.parse(data_string)

data.name='sharmila k'
data.age=26
data.place='ulipuram'
data.region='tamil nadu'
data.country='india'
const strdata=JSON.stringify(data)
fs.writeFileSync('2_json.json',strdata)
