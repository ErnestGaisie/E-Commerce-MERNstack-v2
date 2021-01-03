import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Ernest Gaisie",
    email: "ernestyawgaisie@gmail.com",
    password: bcrypt.hashSync("dzifahodey", 10),
  },
  {
    name: "Boamah Gaisie",
    email: "boamah@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
