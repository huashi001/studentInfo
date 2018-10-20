const Router = require('koa-router');
const {TEACH,SEND,GET_MSG,GET_SCORE} = require('../api/teacher.js');

const teacher = new Router();

teacher.get('/teach',TEACH);
teacher.get('/send',SEND);
teacher.get('/message',GET_MSG);
teacher.get('/getscore',GET_SCORE);

module.exports = teacher;