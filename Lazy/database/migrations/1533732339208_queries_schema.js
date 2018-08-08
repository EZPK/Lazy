'use strict'

const Schema = use('Schema')

class QueriesSchema extends Schema {
  up () {
    this.create('queries', (table) => {
      // alter table
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.integer('query_items_id').unsigned().references('id').inTable('queryitems')
      table.timestamps()
    })
  }

  down () {
    this.table('queries', (table) => {
      // reverse alternations
    })
  }
}

module.exports = QueriesSchema
