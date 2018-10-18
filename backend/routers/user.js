const Router = require('koa-router');
const {USER_LOGIN_API} = require('../api/userAPI.js');
const {STU_SELECTED_COURSE,STU_GET_SCORE,STU_INFO,STU_HOMEWORK} = require('../api/stu.js');

const user = new Router();

user.post('/log',USER_LOGIN_API);
user.get('/course',STU_SELECTED_COURSE);
user.get('/score',STU_GET_SCORE);
user.get('/info',STU_INFO);
user.post('/homework',STU_HOMEWORK)

module.exports = user;