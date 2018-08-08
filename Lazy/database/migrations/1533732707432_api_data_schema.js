'use strict'

const Schema = use('Schema')

class ApiDataSchema extends Schema {
  up () {
    this.create('api_data', (table) => {
      // alter table
      table.increments()
      table.string('Author', 254).notNullable()
      table.string('Contract_type', 254).notNullable()
      table.string('Description', 254).notNullable()
      table.integer('api_data_id').notNullable()
      table.string('Language_code', 254).notNullable()
      table.string('Last_publication', 254).notNullable()
      table.string('Location', 254).notNullable()
      table.string('NbJobs', 254).notNullable()
      table.string('Owner', 254).notNullable()
      table.string('Permis_code', 254).notNullable()
      table.string('Ref', 254).notNullable()
      table.string('Title', 254).notNullable()
      table.string('XpInMonth', 254).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.table('api_data', (table) => {
      // reverse alternations
    })
  }
}

module.exports = ApiDataSchema
