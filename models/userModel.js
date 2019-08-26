const db = require('../database/dbConfig.js')

function find () {
    return db('users')
}

function findById(id) {
    return db('users')
        .where({ id })
        .first()
}

function insert(user) {
    return db('users').insert(user)
}

async function update(id, changes) {
    await db('users')
        .where({ id })
        .update(changes)
    return findById(id)
}

function remove(id) {
    return db('users')
        .where({ id })
        .del()
}

module.exports = {
    find,
    findById,
    insert,
    update,
    remove
}