// build your `/api/tasks` router here
const express = require('express');
const router = express.Router();
const Task = require('./model');
// `[POST] /api/tasks` Even though `task_completed` is stored as an integer, the API uses booleans when interacting with the client
//   - Example of response body: `{"task_id":1,"task_description":"baz","task_notes":null,"task_completed":false,"project_id:1}`
router.post('/', (req, res, next) => {
    Task.insert(req.body).then(task => {
        res.json(task)
    }).catch(next)
});

// `[GET] /api/tasks` Even though `task_completed` is stored as an integer, the API uses booleans when interacting with the client
//   - Each task must include `project_name` and `project_description`
//   - Example of response body: `[{"task_id":1,"task_description":"baz","task_notes":null,"task_completed":false,"project_name:"bar","project_description":null}]`
router.get('/', (req, res, next) => {
    Task.find().then(tasks => {
        res.json(tasks)
    }).catch(next)
});

module.exports = router