const axios = require('axios');
const urlLocal = "http://localhost:3000/"; //https://medlifecrud.herokuapp.com/


exports.homeRoutes = (req, res) => {
    // Make a get request to /api/users
    axios.get( urlLocal +'api/users')
        .then(function(response){
            res.render('index', { users : response.data });
        })
        .catch(err =>{
            res.send(err);
        })
}

exports.add_user = (req, res) =>{
    res.render('add_user');
}


exports.update_user = (req, res) =>{
    axios.get(urlLocal + 'api/users', { params : { id : req.query.id }})
    .then(function(userdata){
        res.render("update_user", { user : userdata.data})
    })
    .catch(err =>{
        res.send(err);
    })
}

exports.survey_form = (req,res) => {
    axios.get(urlLocal + 'api/video', {params : {id : req.query.id , video : req.query.video - 1}})
    .then(function(userdata){
        res.render('survey_form', { urls : userdata.data})
    })
    .catch(err =>{
        const message = err.response.data.message
        res.render('errorNotFound',{message : message});
    })
}

exports.search_cpf = (req,res) => {
    axios.get(urlLocal + 'api/user',{params : { id : req.query.id }})
    .then(function(userdata){
        res.render('searchCPF', { users : userdata.data})
    })
    .catch(err =>{
        const message = err.response.data.message
        res.render('errorNotFound',{message : message});
    })
}

exports.login_user = (req, res) => {
    res.render('login', {params : 'Login', message: null});

}


