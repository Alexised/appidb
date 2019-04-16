/**
 * Resultados.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
    
    Match_Score_Winner:{
      type: 'number',
      required:true,
    },
    Match_Score_Looser:{
      type: 'number',
      required:true,
    },
    Max_Score_D_L :{
      type: 'number',
      required:true,
    },
    Max_Score_T_L :{
      type: 'number',
      required:true,
    },
    
    Max_Score_D_W :{
      type: 'number',
      required:true,
    },
    idplayerMax_Score_T_W :{
      type: 'number',
      required:true,
    },
    idplayerMax_Score_D_L :{
      type: 'number',
      required:true,
    },
    idplayerMax_Score_T_L :{
      type: 'number',
      required:true,
    },
    
    idplayerMax_Score_D_W :{
      type: 'number',
      required:true,
    },
    idplayerMax_Score_T_W :{
      type: 'number',
      required:true,
    },



    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
    matche:{
      model:'Matche'
    }
  },

};

