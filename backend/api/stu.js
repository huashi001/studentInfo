const { query } = require('../util/db.js');
// 学生、教师个人信息
exports.STU_INFO=async function(ctx){
  let {number,identity} = ctx.query;
  if(!number){
    ctx.body={
      ERR_OK:1
    }
    return;
  }
  try{
    let info = await query(`SELECT * FROM ${identity} WHERE number=${number}`); 
    ctx.body={
      ERR_OK:0,
      info
    }
  }catch(e){
    throw new Error(e);
  }
}
//学生选课信息
exports.STU_SELECTED_COURSE=async function(ctx){
  let number = ctx.query.number;
  if(!number){
    return;
  }
  try{
    let selectedCourses =await query(`SELECT * FROM course WHERE courseNum in 
            (SELECT courseNum FROM selectedcourse WHERE number=${number}) `);
    ctx.body={
      ERR_OK: 0,
      selectedCourses
    };
  }catch(e){
    throw new Error(e);
  }
}
//学生成绩信息
exports.STU_GET_SCORE=async function(ctx){
  let number = ctx.query.number;
  if(!number){
    return;
  }
  try{
    let scores =await query(`SELECT name,point,score FROM course,selectedcourse WHERE
          course.courseNum=selectedcourse.courseNum AND selectedcourse.number=${number}`);
    ctx.body={
      ERR_OK: 0,
      scores
    };
  }catch(e){
    throw new Error(e);
  }
}
//学生提交作业
exports.STU_HOMEWORK=async function(ctx){
  console.log(ctx.request.body.name)
  console.log(ctx.request.body.data)
}