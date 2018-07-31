'use strict'

const Schema = use('Schema')

class SearchItemSchema extends Schema {
  up () {
    this.create('search_items', (table) => {
      table.increments()
      table.string('keywords', 254).notNullable()
      table.string('categories', 254).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('search_items')
  }
}

module.exports = SearchItemSchema
