
let userService = require('../service/user-server');

exports.getUser = async (ctx) => {
    ctx.body = await userService.getUser(ctx.params);
};

exports.saveUser = async (ctx) => {
    ctx.body = await userService.saveUser(ctx.request.body);
};
