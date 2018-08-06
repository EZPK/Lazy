'use strict'

const Users = use('App/Models/User')


class UsersController {
    async index(){
        const users = await Users.all()
        return users
    }
}

module.exports = UsersController
