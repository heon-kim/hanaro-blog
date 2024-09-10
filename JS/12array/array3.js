const hong = { id: 1, name: "Hong" };
const choi = { id: 5, name: "Choi" };

const kim = { id: 2, name: "kim" };
const lee = { id: 3, name: "Lee" };
const park = { id: 4, name: "Park" };

class Users {
  constructor(...args) {
    this.users = [...args];
  }

  addUser(user) {
    return [...this.users, user];
  }

  removeUser(selectedUser) {
    return this.users.filter((user) => user !== selectedUser);
  }

  changeUser(oldUser, newUser) {
    const oldUserIdx = this.users.findIndex((user) => user == oldUser);
    if (oldUserIdx > -1) {
      this.users[oldUserIdx] = newUser;
    }
  }
}

const users = new Users(kim, lee, park);

users.addUser(hong);
users.removeUser(lee);
users.changeUser(kim, choi);
console.log(users);
