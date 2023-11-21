var express = require('express');
var router = express.Router();
//const { router } = require('../config/app');
let grocery = require('../models/grocery');

module.exports.Dislaygrocery = async (req,res,next)=>{ //< Mark function as async
    try{
       const grocerylist = await grocery.find(); //< Use of await keyword
       res.render('grocery/list', {
          title: 'grocery List',
          grocerylist: grocerylist,
          displayName: req.user ? req.user.displayName: ''
       });
    }catch(err){
       console.error(err);
       //Handle error
       res.render('grocery/list', {
          error: 'Error on server'
       });
    }
 };

 module.exports.Addgrocery = async (req,res,next)=>{
    try{
        res.render('grocery/add',
        {
            title:'Add grocery',
            displayName: req.user ? req.user.displayName: ''
        })
    }
    catch(err)
    {
        console.error(err);
        res.render('grocery/list',
        {
            error: 'Error on the server'
        });
    }
};

module.exports.Processgrocery = async (req,res,next)=>{
    try{
        let newgrocery = grocery({
            "item": req.body.item,
            "brand": req.body.brand,
            "cost": req.body.cost,
            "quantity": req.body.quantity,
        });
        grocery.create(newgrocery).then(() =>{
            res.redirect('/grocery')
        })
    }
    catch(error){
        console.error(err);
        res.render('grocery/list',
        {
            error: 'Error on the server'
        });
    }
};

module.exports.Editgrocery = async (req,res,next)=>{
    try{
    const id = req.params.id;
    const groceryToEdit = await grocery.findById(id);
    res.render('grocery/edit',
    {
        title:'Edit grocery',
        displayName: req.user ? req.user.displayName: '',
        grocery:groceryToEdit
    })
}
catch(error){
    console.error(err);
    res.render('grocery/list',
    {
        error: 'Error on the server'
    });
}
}

module.exports.ProcessEditgrocery = (req,res,next)=>{
    try{
        const id = req.params.id;
        let updatedgrocery = grocery({
            "_id": id,
            "item": req.body.item,
            "brand": req.body.brand,
            "cost": req.body.cost,
            "quantity": req.body.quantity
        });
        grocery.findByIdAndUpdate(id,updatedgrocery).then(()=>{
            res.redirect('/grocery')
        });
    }
    catch(error){
        console.error(err);
        res.render('grocery/list',
        {
            error: 'Error on the server'
        });
    }
}

module.exports.Deletegrocery = (req,res,next)=>{
    try{
        let id = req.params.id;
        grocery.deleteOne({_id:id}).then(() =>
        {
            res.redirect('/grocery')
        })
    }
    catch(error){
        console.error(err);
        res.render('grocery/list',
        {
            error: 'Error on the server'
        });
    }
}