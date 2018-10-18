const koa = require('koa');
const Router = require('koa-router');
const user = require('./routers/user.js');
const bodyParser = require('koa-bodyparser');
//const koaBody = require('koa-body');

const app = new koa();

app.use(bodyParser());
// app.use(koaBody({
//     multipart: true,
//     formidable: {
//         maxFileSize: 200*1024*1024    // 设置上传文件大小最大限制，默认2M
//     }
// }));
// 装载所有子路由
let router = new Router()
router.use('', user.routes(), user.allowedMethods())
//router.use('/page', page.routes(), page.allowedMethods())

// 加载路由中间件
app.use(router.routes()).use(router.allowedMethods())

app.listen(3000, () => {
  console.log('server run on the 3000 port')
});