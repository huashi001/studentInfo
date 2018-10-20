const {query} = require('../util/db.js');
//教师授课信息
exports.TEACH=async function(ctx){
  let number = ctx.query.number;
  try{
    let data = await query(`SELECT * FROM course WHERE teacherId = ${number}`);
    ctx.body={
      ERR_OK: 0,
      data
    };
  }catch(e){
    throw new Error(e);
  }
}
//发送通知
exports.SEND=async function(ctx){
  let {num,subjectId,note,time}=ctx.query;  //教师号，学科号，通知内容
  try{
   await query(`INSERT INTO message (number,courseNum,note,time) VALUES (?,?,?,?)`,[num,subjectId,note,time])
      .then(res=>{
         ctx.body={
           ERR_OK:0,
           'msg':"保存通知成功"
         }
      })
  }catch(e){
    ctx.body={
      ERR_OK:1,
      'msg':'保存通知出错'
    }
    console.log(e)
  }
}
//获取通知
exports.GET_MSG=async function(ctx){
  let {number} = ctx.query;
  if(!number){
    ctx.body={
      ERR_OK:1,
      'msg': "状态错误!"
    }
    return ;
  }
  try{
    let data =await query(`SELECT message.time,name,note FROM message,course
                            WHERE message.number=${number} AND message.courseNum=course.courseNum`);
    ctx.body={
      ERR_OK:0,
      data
    }
  }catch(e){
    ctx.body={
      ERR_OK:1,
      'msg': e
    }
  }
}
//录入成绩
exports.MARK=async function(ctx){
  let {teacherNum,stuNum,point,subId}=ctx.query;
 try{
  await query(`UPDATE selectedcourse SET score=${point} WHERE number=? AND courseNum=?`,[stuNum,subId])
    .then(res=>{
    ctx.body={
      ERR_OK:0,
      'msg':'输入成功'
    }
  })
 }catch(e){
  ctx.body={
    ERR_OK:1,
    'msg':"出错"
  }
  console.log(e);
 }
}
//获取成绩
exports.GET_SCORE=async function(ctx){
  let {teacherNum,courseNum}=ctx.query;
  try{
    let data = await query("SELECT * FROM selectedcourse WHERE courseNum='"+courseNum+"' AND teacherNum='"+teacherNum+"'");
    ctx.body={
      ERR_OK:0,
      data
    }
  }catch(e){
    ctx.body={
      ERR_OK:1,
      e
    }
    console.log(e)
  }
}
