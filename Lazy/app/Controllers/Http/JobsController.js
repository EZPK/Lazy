'use strict'

const Jobs = use('App/Models/Jobs')

class JobsController {
    async index(){
        const jobs = await Jobs.all()
        return jobs
    }
}

module.exports = JobsController
