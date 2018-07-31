'use strict'

const Model = use('Model')

class Search extends Model {
    user(){
        return this.belongsTo('App/Models/User')
    }

    search_items(){
        return this.hasMany('App/Models/SearchItem')
    }
}

module.exports = Search
