const { get, post } = require("server/router");
const { render, json } = require("server/reply");
const User = require("../models/users");

const all = async ctx => {
  const users = await User.find({}).exec();
  return render("users.pug", { users });
};

const index = ctx => render("userform.html");

const create = async ctx => {
  const { username, password, email } = ctx.data;
//  setup default categories
  const categories = [
      { name: 'Personal', color: 'red', tasks: []},
      { name: 'Every Day', color: 'Blue', tasks: []},
      { name: 'Work', color: 'red', tasks: []}      
  ]
  const user = new User({ username, password, email, categories });
  user.save(function(err) {
    if (err) {
      return json({ err: "Cannot save client because " + err.message });
    } else {
      //   create default categories for this user.
        user.categories
      return json({ user: 4 });
    }
  });
};

module.exports = [
  get("/users", all),
  get("/user", index),
  post("/user", create)
];
