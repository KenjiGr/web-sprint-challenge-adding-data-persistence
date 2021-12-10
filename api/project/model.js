// build your `Project` model here
const db = require('../../data/dbConfig')

async function find(){
    const projects = await db('project')
    return projects.map((project) => {
        return {
            ...project,
            project_completed: project.project_completed === 1,
        }
    })
}

async function findById (id) {
    const row = await db('project')
        .where('project_id', id)
        .first();
    return {
        ...row, 
        project_completed: row.project_completed ? true : false
    }
}

async function insertProject (project) {
    const [id] = await db('project')
        .insert(project)
    return findById(id)
}

module.exports = {find, insertProject}