'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const Factory = use('Factory')
const Database = use('Database')
const User = use('App/Models/User')

class UserSeeder {
  async run () {

    const user = new User()
    user.username = Math.random().toString(36).substring(7);
    user.email = Math.random().toString(36).substring(7)+'@mail.com'
    user.password = 'pwd'
    
    await user.save()
  }
}

module.exports = UserSeeder
