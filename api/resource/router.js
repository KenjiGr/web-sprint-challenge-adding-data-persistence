// build your `/api/resources` router here
const express = require('express');
const router = express.Router();
const Resource = require('./model')
// `[POST] /api/resources` - Example of response body: {"resource_id":1,"resource_name":"foo","resource_description":null}
router.post('/', (req, res, next) => {
    Resource.insert(req.body).then(resource => {
        res.json(resource)
    }).catch(next)
});

// `[GET] /api/resources` Example of response body: [{"resource_id":1,"resource_name":"foo","resource_description":null}]
router.get('/', (req, res, next) => {
    Resource.find().then(resources => {
        res.json(resources)
    }).catch(next)
});

module.exports = router