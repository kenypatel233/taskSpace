const { task } = require("../models/task");

createTask = async (req, res) => {
  try {
    const record = new task({
      ...req.body,
    });
    console.log(record);
    await record.save();
    console.log("Saved");
    res.status(201).json({ status: "success", record });
  } catch (error) {
    console.log(error);
    res.status(400).json({ status: "fail", error });
  }
};

/*

listAllTasks = async(req,res)=>{
    try {
        console.log("Here")
        task.find(
            {
                "taskName":{"$regex":req.body.searchText ,"$options":"i"},
                "taskDescription":{"$regex":req.body.searchText ,"$options":"i"}
            }
        )
        .populate('taskList','Name')
        .select("taskName taskDescription dueDate period periodType Name")
        .then(doc => res.json(doc).status(200))
        //res.status(200).json({status:"Success",tasks})

        
    } catch (error) {
        console.log(error)
        
    }
}
*/

// var options = {
//   select: 'taskName taskDescription dueDate period periodType Name',
//   find:
//   {
//     "taskName":{"$regex":req.body.searchText ,"$options":"i"},
//     "taskDescription":{"$regex":req.body.searchText ,"$options":"i"}
// },

//   populate: 'taskList',

//   page: req.body.pageNo,
//   limit: 2
// };

listTasks = async (req, res) => {
  

  var query = req.body.searchText
    ? {
        taskName: { $regex: req.body.searchText, $options: "i" },
        taskDescription: { $regex: req.body.searchText, $options: "i" },
      }
    : {};

  var options = {
    select: "taskName taskDescription dueDate period periodType Name",

    populate: "taskList",

    page: req.body.pageNo,
    limit: 2,
  };
  try {
    task.paginate(query, options).then((doc) => res.json(doc).status(200));
  } catch (error) {
    console.log(error);
    res.status(400).json({ status: "fail", error });
  }
};

module.exports = { createTask, listTasks };
