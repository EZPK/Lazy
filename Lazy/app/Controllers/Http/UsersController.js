'use strict'

const Users = use('App/Models/User')


class UsersController {
    async index({ auth }){
        const user = await auth.getUser()

        return user
    }

    async login({ request, auth }){
        const { email, password } = request.all()
        try{
            console.log('Logged as: ', email)
            return await auth.attempt(email, password)
        }catch(err){
            console.log('Err: ', err)
        }
    }

    async register({ request }){
        const { email, password } = request.all()
        await Users.create({
            email,
            password,
            username:email,
        }).catch((error) => {
            console.log('Error: ', error)
        })
        return this.login(...arguments)
    }
}

module.exports = UsersController
