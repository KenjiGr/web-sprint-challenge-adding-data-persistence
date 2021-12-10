// build your `/api/projects` router here
const express = require('express');
const router = express.Router();
const Project = require('./model');
// `[POST] /api/projects` Even though `project_completed` is stored as an integer, the API uses booleans when interacting with the client 
// Example of response body: {"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}
router.post('/', async (req, res, next) => {
    try {
        const project = await Project
            .insertProject(req.body);
        res.status(201).json(project)
    } catch (err) {
        next(err)
    }
});

// `[GET] /api/projects` Even though `project_completed` is stored as an integer, the API uses booleans when interacting with the client
// Example of response body: [{"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}]
router.get('/', (req, res, next) => {
    Project.find().then(projects => {
        res.json(projects);
      })
      .catch(next);
});

module.exports = router