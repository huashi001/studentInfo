const Router = require('koa-router');
const {USER_LOGIN_API} = require('../api/userAPI.js');
const {STU_SELECTED_COURSE,STU_GET_SCORE,STU_INFO,STU_HOMEWORK} = require('../api/stu.js');

const stu = new Router();

stu.post('/log',USER_LOGIN_API);
stu.get('/course',STU_SELECTED_COURSE);
stu.get('/score',STU_GET_SCORE);
stu.get('/info',STU_INFO);
stu.post('/homework',STU_HOMEWORK)

module.exports = stu;