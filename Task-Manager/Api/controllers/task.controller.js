const Task = require("../db/models/task.model");
const List = require("../db/models/list.model");

// ReadAll
// app.get("/task", (req, res) => {
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
    title: req.params.title,
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
