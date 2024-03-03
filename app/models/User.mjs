// models/User.js

class User{
  id;
  username;
  email;

  constructor({id, username, email}){
    this.id = id
    this.username = username;
    this.email = email;
  };
  
  static async findAll(){

    return [
      new User({id:1, username:'Antonio', email:'jorgeajrha@gmail.com'}),
      new User({id:2, username:'Jorge', email:'jorgeajrha@gmail.com'}),
      new User({id:3, username:'Ricardo', email:'jorgeajrha@gmail.com'}),
    ];
  };

  static async createUser(user){
    return {
      rows_inserted:1,
      user
    };
  };

};


export default User;

