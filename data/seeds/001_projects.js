exports.seed = function (knex) {
  return knex("projects")
    .truncate()
    .then(() => {
      return knex("projects").insert([
        {
          name: "Sprint Challenge",
          description: "For the sake of CodeGrade!",
          completed: "true",
        },
      ]);
    });
};
