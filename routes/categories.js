const { get } = require('server/router');
const { send, render } = require('server/reply');
const User = require('../models/users');

const index = async ctx => {
    console.log(ctx.params);
    const mail = ctx.params.mail;
    const user = await User.findOne({ email: mail }).exec();
    const { username, email, categories } = user;
    return render('categories.pug', { username, email, categories });
}

module.exports = [
    get('/categories', ctx => send('No category for this user')),
    get('/categories/:mail', index)
]