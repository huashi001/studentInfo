const Router = require('koa-router');
const {TEACH,SEND,GET_MSG} = require('../api/teacher.js');

const teacher = new Router();

teacher.get('/teach',TEACH);
teacher.get('/send',SEND);
teacher.get('/message',GET_MSG);

module.exports = teacher;