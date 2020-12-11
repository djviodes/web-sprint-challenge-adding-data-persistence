exports.seed = function (knex) {
  return knex("tasks")
    .truncate()
    .then(() => {
      return knex("tasks").insert([
        {
          description: "Finish this Sprint Challenge",
          project_id: 1,
          notes: 'CodeGrade is giving me a hassle',
          completed: "true",
        },
      ]);
    });
};
