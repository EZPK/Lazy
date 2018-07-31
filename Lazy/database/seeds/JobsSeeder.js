'use strict'

/*
|--------------------------------------------------------------------------
| JobSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const Factory = use('Factory')
const Database = use('Database')

class JobsSeeder {
  async run () {
    const jobs = await Database.table('jobs')
    console.log(jobs)
  }
}

module.exports = JobsSeeder
