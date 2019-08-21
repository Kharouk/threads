const { forwardTo } = require("prisma-binding");

const Query = {
  items: forwardTo("db")
  // async items(parent, args, ctx, info) {
  //   const items = ctx.db.query.items();
  //   return await items;
  // }
};

module.exports = Query;
