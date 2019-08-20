const db = require('../database/dbConfig.js')

function find () {
    return db('skills')
}

function findById(id) {
    return db('skills')
        .where({ id })
        .first()
}

function findByUserId(userId) {
    return db('skills').where({ userId })
}

async function insert(skill) {
    const [id] = await db('skills').insert(skill, 'id')
    return findById(id)
}

async function update(id, changes) {
    await db('skills')
        .where({ id })
        .update(changes)
    return findById(id)
}

function remove(id) {
    return db('skills')
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