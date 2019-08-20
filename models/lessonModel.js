const db = require('../database/dbConfig')

function find () {
    return db('lessons')
}

function findById(id) {
    return db('lessons')
        .where({ id })
        .first()
}

async function insert(lesson) {
    const [id] = await db('lessons').insert(lesson, 'id')
    return findById(id)
}

function findByUserId(userId) {
    return db('lessons').where({ userId })
}

async function update(id, changes) {
    await db('lessons')
        .where({ id })
        .update(changes)
    return findById(id)
}

function remove(id) {
    return db('lessons')
        .where({ id })
        .del()
}

module.exports = {
    find,
    findById,
    insert,
    update,
    findByUserId,
    remove
}