exports.seed = async function(knex) {
  await knex("dog_owner").del()
  await knex("dog").del()
  await knex("owner").del()

  const kyle_id = await knex("owner").insert({
    name: "Kyle"
  }).returning("id").then(records => records[0])
  const elyse_id = await knex("owner").insert({
    name: "Elyse"
  }).returning("id").then(records => records[0])

  const bixby_id = await knex("dog").insert({
    name: "Bixby"
  }).returning("id").then(records => records[0])
  const mesa_id = await knex("dog").insert({
    name: "Mesa"
  }).returning("id").then(records => records[0])
  const harmony_id = await knex("dog").insert({
    name: "Harmony"
  }).returning("id").then(records => records[0])

  await knex("dog_owner").insert([{
    owner_id: kyle_id,
    dog_id: bixby_id
  },{
    owner_id: kyle_id,
    dog_id: mesa_id
  },{
    owner_id: elyse_id,
    dog_id: harmony_id
  },{
    owner_id: elyse_id,
    dog_id: mesa_id
  }])

  return true
};
