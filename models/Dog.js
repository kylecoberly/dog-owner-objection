const { Model } = require("objection")
const database = require("./database-connection")
Model.knex(database)


module.exports = class Dog extends Model {
  static get tableName() {
    return "dog";
  }
  static get relationMappings(){
    const Owner = require("./Owner")
    return {
      owners: {
        modelClass: Owner,
        relation: Model.ManyToManyRelation,
        join: {
          from: "dog.id",
          through: {
            from: "dog_owner.dog_id",
            to: "dog_owner.owner_id",
          },
          to: "owner.id",
        }
      }
    }
  }
}
