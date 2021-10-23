const mongoose = require('mongoose');

module.exports = function () {
  mongoose
    .connect('mongodb://localhost/task-tracker', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(console.log('connected to db'));
};
