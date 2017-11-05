// import { server } from 'server';
let server = require("server");
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');
const categoriesRoutes = require('./routes/categories');

mongoose.connect('mongodb://localhost/todo');
mongoose.Promise = global.Promise;

const {
  render,
  redirect
} = server.reply;
const {
  get,
  post
} = server.router;


server([
  get('/', ctx => render('index.pug')),
  userRoutes,
  categoriesRoutes
]);