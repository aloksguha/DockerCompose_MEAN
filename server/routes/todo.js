var express = require('express');
var router = express.Router();
var ToDo = require('../models/todo');

/* GET home page. */
var todos = [];

router.get('/', function(req, res, next) {
    ToDo.find({}, function(err, todos) {
        res.send(todos);  
      });
});

router.post('/', function(req, res, next) {
    console.log(req.body);
    var newTodo = new ToDo(req.body);
    newTodo.save(function(err,data) {
        if (err){ throw err;}
        console.log(data);
        res.status(201).jsonp(data);
      });
});

router.put('/:id', function(req, res, next) {
    var _id = req.params.id;
    console.log(_id);
    ToDo.findById(_id, function (err, doc){
        console.log(doc)
        doc.isCompleted = !doc.isCompleted;
        doc.save();
        res.status(200).jsonp(doc);
      });

});

router.delete('/:id', function(req, res, next) {
    var id = req.params.id;
    if(id && id != null){
        console.log(id);
        ToDo.findById(id, function (err, doc) {
            if (err) {
                
            }
            console.log(doc);
            if(doc != null){
                doc.remove(function(err,data){
                    if (err) {
                        res.status(500).jsonp({});
                    }
                    else{
                        res.jsonp(data);
                    }
                })
            }else{
                res.status(500).jsonp({});
            }
           
        
    });
    }else{
        res.status(500).jsonp({});
    }
   
});

module.exports = router;