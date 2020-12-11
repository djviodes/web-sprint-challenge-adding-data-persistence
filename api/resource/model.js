const db = require('../../data/dbConfig');

module.exports = {
    find,
    findById,
    create,
};

function find() {
    return db('resources');
}

function findById(id) {
    return db('resources')
        .where({ id })
}

async function create(resource) {
    const [id] = await db('resources').insert(resource)
    return db('resources').where({ id }).first()
}