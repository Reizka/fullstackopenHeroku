const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
mongoose.set('useUnifiedTopology', true);

const uniqueValidator = require('mongoose-unique-validator');


const personSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    minlength: 3,
    required: true
  },
  number: {
    type: String,
    minlength: 8,
    required: true
  }
  //id: String
});

personSchema.plugin(uniqueValidator);

personSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

module.exports = mongoose.model('Person', personSchema);
