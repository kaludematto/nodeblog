const Posts = require('../models/Posts.js')
const multer = require('multer');

exports.index = (req, res) => {
    Posts.findAll().then(posts => {
        res.render('home', {
            posts: posts,
            title: 'Posts'
        });
    }).catch(error => {
        console.log(error);
    });
}

exports.single = (req, res) => {
    const id = req.params.id;

    Posts.findByPk(id).then(posts => {
        res.render('single-post', {
            posts: posts,
            title: 'Posts'
        });
    }).catch(error => {
        console.log(error)
    });;
}