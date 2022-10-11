const User = require('../models/User')

class UserController{

    async index(req, res){
        const users = await  User.find({})
        res.render('user/index', {users})
    }

    create(req, res){
        res.render('user/create')
    }

    async store(req, res){
        await User.create(req.body);
        res.redirect('/')
    }

    async show(req, res){
        const user = await  User.findOne({_id:req.params.id})
        if (!user){
            res.status(404).send("No User Found");
        }
        res.render('user/show', {user})
    }

    async update(req, res){
        const user = await  User.findOneAndUpdate({_id:req.params.id}, req.body, {
            new:true
        })
        if (!user){
            res.status(404).send("No User Found");
        }
        res.redirect('/')
    }

    async delete(req, res){
        const user = await  User.findOneAndDelete({_id:req.params.id})
        if (!user){
            res.status(404).send("No User Found");
        }
        res.redirect('/')
    }

}

module.exports = new UserController;