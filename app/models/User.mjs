// models/User.js
/**
 * @class 
 * @classdesc this class manage the user data
 */
class User{
  id;
  username;
  email;

  constructor({id, username, email}){
    this.id = id
    this.username = username;
    this.email = email;
  };

  /**
   * static 
   * @static
   * @returns { Array } a list or users
   */
  static async findAll(){

    return [
      new User({id:1, username:'Antonio', email:'jorgeajrha@gmail.com'}),
      new User({id:2, username:'Jorge', email:'jorgeajrha@gmail.com'}),
      new User({id:3, username:'Ricardo', email:'jorgeajrha@gmail.com'}),
    ];
  };

  /**
   * static 
   * @static
   * @returns { Object } a object for the where find the user contain
   */
  static async createUser(user){
    return {
      rows_inserted:1,
      user
    };
  };

};


export default User;

