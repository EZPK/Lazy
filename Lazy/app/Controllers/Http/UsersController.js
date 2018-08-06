'use strict'

const Users = use('App/Models/User')


class UsersController {

    // Show current user. Match /me URL
    async me({ auth }){
        const user = await auth.getUser() // same as await auth.current.user
        return user
    }

    // Show all users. Match /users URL
    async index(){
        const users = await Users.all()
        return users
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
