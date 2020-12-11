const db = require("../../data/dbConfig");

module.exports = {
  find,
  findById,
  create,
};

function find() {
  return db("tasks")
    .leftJoin("projects", "tasks.project_id", "projects.id")
    .select(
      "projects.name as project_name",
      "projects.description as project_description",
      "tasks.description",
      "tasks.notes",
      "tasks.completed"
    );
}

function findById(id) {
    return db('tasks')
        .where({ id })
}

async function create(task) {
  const [id] = await db("tasks").insert(task);
  return db("tasks").where({ id }).first();
}
