'use strict'

const Schema = use('Schema')

class SearchSchema extends Schema {
  up () {
    this.create('searches', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.integer('search_item_id').unsigned().references('id').inTable('search_item')
      table.timestamps()
    })
  }

  down () {
    this.drop('searches')
  }
}

module.exports = SearchSchema
