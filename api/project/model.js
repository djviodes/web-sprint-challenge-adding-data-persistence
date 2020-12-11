const db = require('../../data/dbConfig');

module.exports = {
    find,
    create,
};

function find() {
    return db('projects');
}

async function create(project) {
    const [id] = await db('projects').insert(project)
    return db('projects').where({ id }).first()
}