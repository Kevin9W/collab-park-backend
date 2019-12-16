const sqlite3 = require('sqlite3')
const database = new sqlite3.Database('./database.db')
//---Creating Table Queries---
const createEmailPrefQuery = "CREATE TABLE IF NOT EXIST email_pref (first_name TEXT, last_name TEXT, email TEXT, email_all BOOLEAN"
//---Creates Tables---
database.run(createEmailPrefQuery, error=>{
	if (error) console.log(new Error("Create email pref table failed"),error)
	else console.log("Create email pref table succeded")
})