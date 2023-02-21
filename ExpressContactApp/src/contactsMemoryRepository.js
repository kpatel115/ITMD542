// Memory Repository
// handling all data access
const crypto = require('crypto');
const db = new Map();

  
db.set('ddad031e-e030-419a-9518-2f16534edeaf', {name: "karan", id: "ddad031e-e030-419a-9518-2f16534edeaf"})
db.set('e4a9c8f6-4bb8-44f5-8915-8df78500f6e3', {name: "patel", id: "e4a9c8f6-4bb8-44f5-8915-8df78500f6e3"})
//db map with two objects

// repo set to object for application
const repo = {
  findAll: () => Array.from(db.values()),
  findById: (uuid) => db.get(uuid),
  create: (contact) => {
    const newContact = {
      id: crypto.randomUUID(),
      name: contact.name,
    };
    db.set(newContact.id, newContact);
  },
  deleteById: (uuid) => db.delete(uuid),
  update: (contact) => db.set(contact.id, contact),

};

module.exports = repo;

