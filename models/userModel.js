const db = require('../database/dbConfig.js')

async function find () {
    // let query = await db('users')
    // let skillsQuery = await db('skills').where({ user_id: query.id})



    // return { ...query, skills: skillsQuery}
    // return db('users')


    // return "" 
    return await db('users')

}

function findById(id) {
    return db('users')
        .where({ id })
        .first()
}

function findByEmail(email) {
    return db('users')
        .where({ email })
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
    remove,
    findByEmail
}