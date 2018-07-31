'use strict'

const Schema = use('Schema')

class JobSchema extends Schema {
  up () {
    this.create('jobs', (table) => {
      table.increments()
      table.integer('search_id').unsigned().references('id').inTable('search')
      table.integer('api_data_id').unsigned().references('id').inTable('api_data')
      table.boolean('is_send').defaultTo(false)
      table.timestamps()
    })
  }

  down () {
    this.drop('jobs')
  }
}

module.exports = JobSchema
