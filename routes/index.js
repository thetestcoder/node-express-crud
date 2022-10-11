const userRoutes = require('./users/index')

module.exports = (app) =>{
    app.use('/', userRoutes)
}

