
module.exports = (app) => {
  const Customer = app.models.Customer;
  const Role = app.models.Role;
  const RoleMapping = app.models.RoleMapping;

  //TODO: User creation

//Role creation
  // Role.create({name: 'user'}, (err, adminRole) => {
  //   if (err) return console.log('err', err);
  //   console.log(adminRole);
  //   adminRole.principals.create({principalType: RoleMapping.USER, principalId: '583efa72b10d5bd03329098e'},
  //   (err, response) => {
  //     if (err) return console.log('err', err);
  //     console.log('works', response);
  //   });
  // });
};

