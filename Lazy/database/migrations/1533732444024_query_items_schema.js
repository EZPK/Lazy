'use strict'

const Schema = use('Schema')

class QueryItemsSchema extends Schema {
  up () {
    this.create('query_items', (table) => {
      // alter table
      table.increments()
      table.string('keywords', 254).notNullable()
      table.string('categories', 254).notNullable()
      table.integer('query_id').unsigned().references('id').inTable('queries')
      table.timestamps()
    })
  }

  down () {
    this.table('query_items', (table) => {
      // reverse alternations
    })
  }
}

module.exports = QueryItemsSchema
