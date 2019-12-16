const express=require('express')
const database=require('./database')

const app=express()
const PORT=3000

app.use(express.json())

app.get('/',(request,response)=>{
	response.send("o3o")
})

app.post('/signup',(request,response)=>{
	let createNewEmail ='INSERT INTO email_pref VALUES(?,?,?,?)'
	let reqBody=Object.values(request.body)
	database.run(createNewEmail,reqBody,(error,result)=>{
		if(error){
			console.log("Failed to make new email",error);
			response.sendStatus(500)
		} 
		else{
			response.sendStatus(200)
		}
	})
})

app.listen(PORT, ()=>{
	console.log(`App listening on PORT:${PORT}`)
})
