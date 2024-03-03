// models/User.js

class users  {
  static users = [];

  static find(){
    this.users.filter( users => {

    });
  };
};

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
