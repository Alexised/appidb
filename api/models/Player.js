/**
 * Player.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */
const bcrypt = require('bcrypt-nodejs');

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
    id: {
       columnName:'identificacion',
       type: 'string',
      required:true,
      autoIncrement: false 
    },
    FullName :{
      type:'string',
      columnType:'varchar(80)',
      required:true,
    },
    Email  :{
      type:'string',
      columnType:'varchar(50)',
      required:true,
      unique:true
    },
    Genre  :{
      type:'string',
      columnType:'varchar(10)',
      required:true,
    },
    Age :{
      type:'string',
      columnType:'varchar(3)',
      required:true,
    },
    Passwords  :{
      type:'string',
      columnType:'varchar(8)',
      required:true,
    },
    Role  :{
      type:'number',
      columnType:'int',
      required:true,
    },
    

    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
    team: {
      model: 'Team'
    }

  },
  customToJSON: function() {
    return _.omit(this, ['Passwords'])
 },
 beforeCreate: function(user, cb){
   bcrypt.genSalt(10, function(err, salt){
     bcrypt.hash(user.Passwords, salt, null, function(err, hash){
       if(err) return cb(err);
       user.Passwords = hash;
       return cb();
     });
   });
 }

};

//edwina@hotmail.com
//7896