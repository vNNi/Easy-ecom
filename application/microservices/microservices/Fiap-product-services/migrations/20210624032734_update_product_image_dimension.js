export const up = knex =>
  knex.schema.table("product", table => {
    table.string("image");
    table.string("length").default("20");
    table.string("weight").default("1");
    table.string("height").default("20");
    table.string("width").default("20");
    table.string("depth").default("0");
  });

export const down = knex => {};
