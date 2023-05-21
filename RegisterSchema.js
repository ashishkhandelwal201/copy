//Require Mongoose
import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
mongoose.set('strictQuery',true);
 
const RegisterSchema = mongoose.Schema({
  _id: Number,
  name: {},
  email: {},
  password: {},
  mobile: {},
  address: {},
  city: {},
  gender: {},
  info: String
});

// Apply the uniqueValidator plugin to RegisterSchema.
RegisterSchema.plugin(uniqueValidator);

// compile schema to model
const RegisterSchemaModel = mongoose.model('reg_tmp', RegisterSchema ,'newregister');

export default RegisterSchemaModel