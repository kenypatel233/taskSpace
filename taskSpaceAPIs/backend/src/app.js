const express = require("express")
const mongoose = require("mongoose") // new
var bodyParser = require('body-parser')
const multer = require("multer")
const taskListRouter = require("./api/routes/taskList")
const taskRouter = require("./api/routes/task")
require('dotenv').config();
const upload = multer()





// Connect to MongoDB database
mongoose
	.connect(process.env.URL, { useNewUrlParser: true })
	.then(() => {
		const app = express()
		app.listen(5000, () => {
			console.log("Server has started!")
		})
        app.use(bodyParser.json())
        app.use(bodyParser.urlencoded({ extended: false }))
        app.use(upload.any())
        app.use(taskListRouter)
        app.use(taskRouter)


        
	})
    .catch(err=> console.log("Something went wrong", err))


// const record = new task({
//     taskName:"NewTask21111",
//     taskDescription:"kfghjvlmn",
//     dueDate:'2022-08-13',
//     period:'2022-06-03',
//     periodType:"Monthly",
//     taskList:'6381bf9171420fffe445ddbc',
// })

// record.save().then()
// {
// console.log("Saved")
// }

// task.find().then((doc)=>{
//     res = res.json(doc);
//     console.log(res)

// })