const express = require('express');
const router = express.Router();


const post_controller = require('../controllers/post.controller');

router.get('/test', post_controller.test);

router.get('/', post_controller.all);

router.get('/:id', post_controller.details);

router.post('/create', post_controller.create);

router.put('/:id/update', post_controller.update);

router.delete('/:id/delete', post_controller.delete);

module.exports = router;