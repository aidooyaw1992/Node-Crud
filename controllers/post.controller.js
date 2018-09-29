const Post = require('../models/post.model');
var fs = require('fs');
//simple version, witout validation or sanitation
exports.test = function(req, res){
    res.send('Greetings from the Test Controller!');
};

exports.all = function(req, res){
    Post.find({}, function(err, post){
        if(err) return next(err);
        res.send(post);
    });
};

exports.create = function(req, res){
    let post = new Post({
        title: req.body.title,
        content: req.body.content,
    });
    // post.image.data = fs.readFileSync(req.file.image.path);
    // post.image.contentType ='image/png';

    

    post.save(function(err, result){
        if(err) return next(err);
        res.send(result);
    });    
};

exports.details = function(req, res){
    Post.findById(req.params.id, function(err, post){
        if(err) return next(err);
        res.send(post);
    })
};

exports.update = function(req, res){
    Post.findByIdAndUpdate(req.params.id, {$set: req.body},
        function(err, post){
            if(err) return next(err);
            res.send("Successfully updated Post ID: "+post.id);
        })
};

exports.delete = function(req, res){
    Post.findByIdAndDelete(req.params.id, function (err, post){
        if(err) return next(err);
        res.send("Successfully deleted Post ID: "+post.id);
    })
};