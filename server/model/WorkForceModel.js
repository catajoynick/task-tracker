const mongoose = require('mongoose');
const Joi = require('joi');

// Workforce Schema
const workForceSchema = mongoose.Schema({
  firstName: {
    type: String,
    required,
  },
  lastName: {
    type: String,
    required,
  },
  email: {
    type: String,
    required,
    unique: true,
  },
});

const workForce = new mongoose.model('WorkForce', workForceSchema);

// Validates workforce
function validateWorkForce(workforce) {
  const schema = Joi.object({
    firstName: Joi.string().required().max(255),
    lastName: Joi.string().required.max(255),
    email: Joi.email().required(),
  });

  return schema.validate(workForce);
}

module.exports.WorkForce = workForce;
module.exports.validateWorkForce = validateWorkForce;
