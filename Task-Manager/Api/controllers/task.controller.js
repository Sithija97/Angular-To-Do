const Task = require("../db/models/task.model");
const List = require("../db/models/list.model");

// ReadAll
// app.get("/list/:listid/task", (req, res) => {
module.exports.readall = (req, res) => {
  Task.find({ _listId: req.params.listId })
    .then((tasks) => {
      res.send(tasks);
    })
    .catch((err) => {
      console.log("error occured : " + err);
    });
};

//CreateTask
// app.get('/list/:listid/tasks', (req,res) => {
module.exports.createtask = (req, res) => {
  new Task({
    title: req.body.title,
    _listId: req.params.listId,
  })
    .save()
    .then((tasks) => {
      res.send(tasks);
    })
    .catch((err) => {
      console.log("error occured : " + err);
    });
};

//UpdateTask
//app.patch('/list/:listId/tasks/:taskId',(req,res) => {
module.exports.updatetask = (req,res) => {
    Task.findByIdAndUpdate({
        //_listId: req.params.listId,
        _id:req.params.taskId,
    },{
        $set: req.body
        //title:req.body.title
    })
    .then(() => {
        res.send({message: 'Updated Successfully'});
        console.log("task updated successfully");
      })
      .catch((err) => {
        console.log("error occured : " + err);
      });
}

//DeleteTask
//app.delete('/list/:listId/task',(req,res) => {
    module.exports.deletetask = (req,res) => {
        Task.findByIdAndDelete({
            _id:req.params.taskId,
        })
        .then((tasks) => {
            res.send("deleted " + tasks);
            console.log("task deleted successfully");
          })
          .catch((err) => {
            console.log("error occured : " + err);
          });
    }