const mongoose = require("mongoose")

const schema = mongoose.Schema({
   
	Name: String,
	Description: String,
    Active: Boolean
})

const taskList =  mongoose.model("taskList", schema)
module.exports = {taskList}