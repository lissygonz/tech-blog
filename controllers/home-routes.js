const router = require('express').Router();


router.get('/dashboard', (req,res) => res.render('dashboard'));
router.get('/signup', (req,res) => res.render('signup'));
router.get('/login', (req,res) => res.render('login'));
router.get('/', (req,res) => res.render('all-posts'));

module.exports = router;

