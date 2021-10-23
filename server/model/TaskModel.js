const mongoose = require('mongoose');
const Joi = require('joi');
const { string } = require('joi');

const TaskSchema = mongoose.Schema({
  taskName: {
    type: String,
    required,
  },
  taskSeverity: {
    type: String,
    required,
  },
  taskAssignedTo: {
    type: String,
    required,
  },
  taskDueDate: {
    type: String,
  },
});
