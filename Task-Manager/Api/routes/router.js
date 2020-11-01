const express = require("express");
const router = express.Router();

const listControler = require('../controllers/list.controller')
const taskController = require('../controllers/task.controller')

router.get('/list', listControler.readall);
router.post("/list", listControler.create);
router.get("/list/:listId", listControler.readone);
router.patch("/list/:listId", listControler.update);
router.delete("/list/:listId", listControler.delete);

router.get('/list/:listId/tasks',taskController.readall);
router.post('/list/:listId/tasks', taskController.createtask);
router.patch('/list/:listId/tasks/:taskId',taskController.updatetask)
router.delete('/list/:listId/tasks/:taskId',taskController.deletetask)
module.exports = router;
