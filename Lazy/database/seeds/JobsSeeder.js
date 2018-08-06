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
const Jobs = use('App/Models/Jobs')

class JobsSeeder {
  async run () {

    const job = new Jobs()
    job.title = Math.random().toString(36).substring(7)
    job.search_id = Math.floor(Math.random() * 100) + 1  
    job.api_data_id = Math.floor(Math.random() * 100) + 1 
    job.is_send = false
    
    await job.save()
  }
}

module.exports = JobsSeeder
