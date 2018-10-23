const { query } = require('../util/db.js');

async function getUserData(sql) {
  let data = await query(sql);
  return data;
}
exports.USER_LOGIN_API = async (ctx) => {
  let { name, psd, identity } = ctx.request.body;  // 表单输入数据
  if (identity !== "stu" && identity !== "teacher") {
    ctx.body = {
      ERR_OK: 1,
      msg: "状态错误"
    }
    return;
  }
  try {
    let data = await getUserData(`SELECT * FROM ${identity} WHERE number=${name}`);  // 数据库数据
    if (data.length === 0) {
      ctx.body = {
        ERR_OK: 1,
        msg: "用户名不存在!"
      }
    } else {
      if (data[0].password !== psd) {
        ctx.body = {
          ERR_OK: 1,
          msg: "用户名或者密码错误!"
        }
      } else {
        ctx.body = {
          ERR_OK: 0,
          userName: name,
          identity: identity,
          msg: "登录成功!"
        }
        ctx.cookies.set("user",name,{
          httpOnly:false
        });
      }
    }
  } catch (e) {
    ctx.body={
      ERR_OK:1,
      msg: "未知错误!"
    }
  }
}
//获取留言
exports.COMMU=async function(ctx){
  try{
    let communication=await query(`SELECT * FROM commu`);
    ctx.body={
      ERR_OK:0,
      communication
    }
  }catch(e){
    ctx.body={
      ERR_OK:1,
      e
    }
  }
}
//提交留言
exports.SUBMIT_COMMU=async function(ctx){
  let {num,note,time}=ctx.query;
  try{
    await query(`INSERT INTO commu (number,note,time) VALUES (?,?,?)`,[num,note,time]).then(res=>{
      ctx.body={
        ERR_OK:0,
        'msg':"success"
      }
    })
  }catch(e){
    ctx.body={
      ERR_OK:1,
      "msg":'failed'
    }
  }
}