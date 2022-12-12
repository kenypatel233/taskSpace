const { taskList} = require("../models/taskList")

createTaskList = async(req,res) => {
    try {
        console.log(req.body)
      


        const record = new taskList({
            ...req.body,

        })
        console.log(record)
        await record.save();
        console.log("Saved")
        res.status(201).json({ status: 'success', record });
        
    } catch (error) {
        console.log(error);
        res.status(400).json({ status: 'fail', error });
        
    }
}

module.exports = {createTaskList}