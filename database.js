const sqlite3 = require('sqlite3')
const database = new sqlite3.Database('./database.db')
//---Creating Table Queries---
const createEmailPrefQuery = "CREATE TABLE IF NOT EXISTS email_pref (first_name TEXT, last_name TEXT, email TEXT, events BOOLEAN, discount BOOLEAN, news_updates BOOLEAN, frequency TEXT)"
//---Creates Tables---
database.run(createEmailPrefQuery, error=>{
	if (error) console.log(new Error("Create email_pref table failed"),error)
	else console.log("Create email pref table succeded")
})

module.exports=database