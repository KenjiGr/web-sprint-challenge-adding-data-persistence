// build your `/api/projects` router here
const express = require('express');
const router = express.Router();

// `[POST] /api/projects` Even though `project_completed` is stored as an integer, the API uses booleans when interacting with the client 
// Example of response body: {"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}
router.post('/',);

// `[GET] /api/projects` Even though `project_completed` is stored as an integer, the API uses booleans when interacting with the client
// Example of response body: [{"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}]
router.get('/',);

module.exports = router