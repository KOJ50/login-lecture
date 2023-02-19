"use strict";

class UserStorage {
  static #users = {
    id: ["권오진", "비멘토", "아고라"],
    psword: ["1234", "1234", "123456"],
    name: ["권오진2", "비멘토2", "아고라2"],
  };

  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }
}

module.exports = UserStorage;
