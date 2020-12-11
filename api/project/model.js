const db = require('../../data/dbConfig');

module.exports = {
    find,
    findById,
    create,
};

function find() {
    return db('projects');
}

function findById(id) {
    return db('projects')
        .where({ id })
}

async function create(project) {
    const [id] = await db('projects').insert(project)
    return db('projects').where({ id }).first()
}