const db = require('../../data/dbConfig');

module.exports = {
    find,
    create,
};

function find() {
    return db('tasks')
        .leftJoin('projects', 'projects.id', 'tasks.project_id')
        .select('tasks.id', 'projects.name', 'projects.description', 'tasks.description', 'tasks.notes', 'tasks.completed');
}

async function create(task) {
    const [id] = await db('tasks').insert(task)
    return db('tasks').where({ id }).first()
}