const bcrypt = require("bcryptjs");
const UIDGenerator = require("uid-generator");
const uidgen = new UIDGenerator(256, UIDGenerator.BASE62);

const faker = require("faker");

const person = {
  uid: uidgen.generateSync(),
  username: faker.internet.userName().toLowerCase(),
  password: bcrypt.hashSync(faker.internet.password()),
  email: faker.internet.email()
  
};

const people = [];

for (let i = 0; i < 10; i++) {
  people.push({
    uid: uidgen.generateSync(),
    username: faker.internet.userName(),
    password: bcrypt.hashSync(faker.internet.password()),
    email: faker.internet.email()
  });
}

exports.seed = function(knex, Promise) {
  return knex("users").insert([
    {
      uid: "DnuzdSXCtMgmRWDCRRE1iQ",
      username: "jon",
      password: bcrypt.hashSync("qwerty"),
      email: "jon@google.com"
      
    },
    {
      uid: uidgen.generateSync(),
      username: "kelly",
      password: bcrypt.hashSync("ytrewq"),
      email: "kelly@amazon.com"
     
    },
    {
      uid: uidgen.generateSync(),
      username: "kevin",
      password: bcrypt.hashSync("pasta"),
      email: "kevin@ubilink.com"
      
    },
    ...people
  ]);
};