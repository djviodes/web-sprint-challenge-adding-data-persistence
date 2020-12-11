exports.seed = function (knex) {
  return knex("resources")
    .truncate()
    .then(() => {
      return knex("resources").insert([
        {
          name: "Laptop",
          description: "2018 MacBook Pro",
        },
      ]);
    });
};
