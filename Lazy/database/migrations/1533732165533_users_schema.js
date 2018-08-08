'use strict'

const Schema = use('Schema')

class UsersSchema extends Schema {
  up () {
    this.create('users', (table) => {
      // alter table
      table.increments()
      table.string('username', 80)
      table.string('email', 254).notNullable().unique()
      table.string('password', 60).notNullable()
      table.integer('criteria_id').unsigned().references('id').inTable('criteria')
      table.timestamps()
    })
  }

  down () {
    this.table('users', (table) => {
      // reverse alternations
    })
  }
}

module.exports = UsersSchema
