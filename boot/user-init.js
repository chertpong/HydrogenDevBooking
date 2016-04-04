var User = require('./../models/auth/user');

module.exports = () => new Promise((resolve,reject) => {
  User
    .remove({})
    .then(function (data) {
      console.log('[-]' + ' User ' + (data.result.ok ? 'success' : 'fail'));
      User
        .create({
          email: 'kritcg@gmail.com',
          password: 'test',
          roles: ['Admin']
        })
        .then(function (data) {
          console.log('[+] User: ' + data.email);
          return resolve(data);
        })
    })
    .catch(err => reject(err));
});