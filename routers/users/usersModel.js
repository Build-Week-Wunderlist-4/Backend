const db = require("../../data/dbConfig.js");

module.exports = {
  findById,
  updateById,
  removeUser
};

async function findById(id) {
  return (users = await db("users")
    .where({ uid: id })
    .select("username", "email")
    .first());
}

async function updateById(data, id) {
  const user = await db("users")
    .where({ uid: id })
    .update({ email: data.email });
  return user;
}

async function removeUser(id) {
  const task = await db("users")
    .where({ uid: id })
    .del();
}