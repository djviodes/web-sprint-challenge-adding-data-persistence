const db = require('../../data/dbConfig');

module.exports = {
    find,
    create,
};

function find() {
    return db('resources');
}

async function create(resource) {
    const [id] = await db('resources').insert(resource)
    return db('resources').where({ id }).first()
}