const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('home')
});

router.get('/post', (req, res) => {
    res.render('single-post')
})

module.exports = router;