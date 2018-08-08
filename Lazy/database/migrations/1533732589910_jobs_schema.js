'use strict'

const Schema = use('Schema')

class JobsSchema extends Schema {
  up () {
    this.create('jobs', (table) => {
      // alter table
      table.increments()
      table.string('title')
      table.integer('queries_id').unsigned().references('id').inTable('queries')
      table.integer('api_data_id').unsigned().references('id').inTable('apidata')
      table.boolean('is_send').defaultTo(false)
      table.string('email', 254)
      table.string('name', 254)
      table.timestamps()
    })
  }

  down () {
    this.table('jobs', (table) => {
      // reverse alternations
    })
  }
}

module.exports = JobsSchema
