const express = require('express');
const route = express.Router()

const services = require('../services/render');
const controller = require('../controller/controller');
const auth = require('../middleware/auth');

const {cronTaks} = require('../controller/node_cron');

/**
 *  @description Root Route
 *  @method GET /
 */
 route.get('/', services.homeRoutes);

 /**
  *  @description add users
  *  @method GET /add-user
  */
 route.get('/add-user', services.add_user)
 
 /**
  *  @description for update user
  *  @method GET /update-user
  */
 route.get('/update-user', services.update_user)

 /**
  *  @description for login auth
  *  @method GET /login_user
  */
 route.get('/login', services.login_user)

  /**
  *  @description method search a user by cpf
  *  @method GET /searchCPF
  */
 route.get('/search',services.search_cpf)

   /**
  *  @description 
  *  @method GET /
  */
 route.get('/form',services.survey_form)

 

 
 // API DB Urls
 route.post('/api/users', controller.create);
 route.get('/api/users', controller.find);
 route.put('/api/users/:id', controller.update);
 route.delete('/api/users/:id', controller.delete);
 
//All above I created
 route.get('/api/user', controller.find_CPF);
 route.get('/api/video', controller.find_video);
 
 //API JOTFORM
 route.get('/api/form', controller.all_forms);
 
 // API USER AUTH
 route.post('/api/register', controller.register_user);
 route.post('/api/login',controller.login_user);
 
 //test login auth
 route.post('/welcome', auth,(req,res)=>{
    res.send("Welcome to freecodecamp")
 });
//Cronograma para salvar as respostas do JotFrom em outro banco
 cronTaks.start();
 module.exports = route