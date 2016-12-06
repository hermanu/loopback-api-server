
module.exports = (Customer) => {
  Customer.observe('before save', (ctx, next) => {
    if (ctx.instance) ctx.instance.createAt = new Date();
    next();
  });
};
