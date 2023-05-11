import { Schema, model, models } from 'mongoose';

const EprofileSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User', //this allows one user to have many prompts point to him.
  },
  ename: {
    type: String,
  },
  language: {
    type: String,
  },
  proffesion: {
    type: String,
  },
  location: {
    type: String,
  },
  salary: {
    type: String,
  },
});


const Eprofile = models.Eprofile || model('Eprofile', EprofileSchema);

export default Eprofile;