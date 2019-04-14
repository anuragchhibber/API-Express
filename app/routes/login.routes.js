module.exports = (app) => {
    const login = require('../controllers/login.controller.js');

    //Create new login
    app.post('/login', login.create);

    //Retrieve login details
    app.get('/login/:name', login.findOne);
}