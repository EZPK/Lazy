'use strict'

const Schema = use('Schema')

class CriteriaSchema extends Schema {
  up () {
    this.create('criteria', (table) => {
      table.increments()
      table.string('type', 255)
      table.string('sector', 255)
      table.string('ethic', 255)
      table.string('motivation', 255)
      table.timestamps()
    })
  }

  down () {
    this.drop('criteria')
  }
}

module.exports = CriteriaSchema
