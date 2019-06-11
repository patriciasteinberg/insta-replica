const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const LikeControler = require('./controllers/LikeController');
const PostController = require('./controllers/PostController')

const routes = new express.Router();
const upload = multer(uploadConfig);

routes.get('/posts', PostController.index);
routes.post('/posts', upload.single('image'), PostController.store);
routes.post('/posts/:id/like', LikeControler.store);

module.exports = routes;