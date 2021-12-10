// build your `Resource` model here
const db = require('../../data/dbConfig')

async function find(){
    const resources = await db('resources')
    return resources
}

async function findById (id) {
    const row = await db('resources')
        .where('resource_id', id)
        .first();
    return row
}

async function insert (resource) {
    const [id] = await db('resources')
        .insert(resource)
    return findById(id)
}

module.exports = {find, insert}