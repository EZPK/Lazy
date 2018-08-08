'use strict'

const Schema = use('Schema')

class JobEmailsSchema extends Schema {
  up () {
    this.create('job_emails', (table) => {
      table.increments()
      table.integer('job_id').unsigned().references('id').inTable('jobs')
      table.integer('user_id').unsigned().references('id').inTable('user')
      table.integer('criteria_id').unsigned().references('id').inTable('criteria')
      table.string('template', 254)
      table.timestamps()
    })
  }

  down () {
    this.drop('job_emails')
  }
}

module.exports = JobEmailsSchema
