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

// Route.get('/', async () => {
//     return await Database.table('Users').select('*')
// })


// Route.get('/users', async () => {
//     return await User.all()
// })

Route.post('/register', 'UsersController.register')
Route.post('/login', 'UsersController.login')
Route.get('/me', 'UsersController.index').middleware('auth')

// Route.get('/logged/:id', 'UsersController.logged').middleware('auth')


Route.get('/jobs', 'JobsController.index').middleware('auth')
Route.get('/users', 'UsersController.index').middleware('auth')


// Route.post('jobs', 'JobsController.store')
// Route.delete('jobs/:id', 'JobsController.destroy')