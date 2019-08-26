const db = require('../database/dbConfig.js')

function find () {
    return db('review')
}

function findById(id) {
    return db('review')
        .where({ id })
        .first()
}

function findByUserId(userId) {
    return db('review').where({ userId })
}

function insert(review) {
    return db('review').insert(review)
    
}

async function update(id, changes) {
    await db('review')
        .where({ id })
        .update(changes)
    return findById(id)
}

function remove(id) {
    return db('review')
        .where({ id })
        .del()
}

module.exports = {
    find,
    findById,
    insert,
    update,
    remove,
    findByUserId
}