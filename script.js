
// class User {
//   constructor(firstName, lastName, age, location) {
//     this.firstName = firstName
//     this.lastName = lastName
//     this.age = age
//     this.location = location
//   }

//   compareAge(otherUser) {
//     if (this.age > otherUser.age) {
//       return `${this.firstName} ${this.lastName} è più vecchio di ${otherUser.firstName} ${otherUser.lastName}`
//     } else if (this.age < otherUser.age) {
//       return `${this.firstName} ${this.lastName} è più giovane di ${otherUser.firstName} ${otherUser.lastName}`
//     } else {
//       return `${this.firstName} ${this.lastName} ha la stessa età di ${otherUser.firstName} ${otherUser.lastName}`
//     }
//   }
// }

// const user1 = new User("Matteo", "Vacca", 23, "Cagliari")
// const user2 = new User("Andrea", "Barocchi", 35, "Roma")
// const user3 = new User("Marianna", "Albrici", 23, "Bergamo")
// const user4 = new User("Emanuele", "Pitoni", 20, "Bergamo")

// console.log(user1.compareAge(user2))
// console.log(user2.compareAge(user1))
// console.log(user1.compareAge(user3))
// console.log(user4.compareAge(user3))


class User {
    constructor(firstName, lastName, age, location) {
      this.firstName = firstName
      this.lastName = lastName
      this.age = age
      this.location = location
    }
  
    static compareAge(user1, user2) {
      if (user1.age > user2.age) {
        return `${user1.firstName} è più vecchio di ${user2.firstName}`
      } else if (user1.age < user2.age) {
        return `${user1.firstName} è più giovane di ${user2.firstName}`
      } else {
          return `${user1.firstName} ha la stessa età di ${user2.firstName}`
      }
    }
  }
  
  const users = [ 
    new User("Matteo", "Vacca", 23, "Cagliari"),
    new User("Gigi", "Grussu", 28, "Oristano")
  ]
  
  
  console.log(User.compareAge(users[0], users[1]))
  console.log(User.compareAge(users[1], users[0]))