'use strict'

const Model = use('Model')

class SearchItem extends Model {
    search(){
        return this.belongsTo('App/Models/Search')
    }
}

module.exports = SearchItem
