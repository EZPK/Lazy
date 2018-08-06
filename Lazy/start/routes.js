'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

const Database = use('Database')
const Route = use('Route')
const User = use('App/Models/User')

Route.post('/register', 'UsersController.register')
Route.post('/login', 'UsersController.login')
Route.get('/me', 'UsersController.me').middleware('auth')

Route.get('/jobs', 'JobsController.index')
Route.get('/users', 'UsersController.index')


// Route.post('jobs', 'JobsController.store')
// Route.delete('jobs/:id', 'JobsController.destroy')