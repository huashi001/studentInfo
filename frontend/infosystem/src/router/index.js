import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


import Log from 'components/log/log'
import Stu from 'components/stu/stu'
import Teacher from 'components/teacher/teacher'
import Feature from 'components/feature/feature'
import Course from 'components/course/course'
import Score from 'components/score/score'
import Info from 'components/info/info'
import Homework from 'components/homework/homework'
import Send from 'components/send/send'
import Teach from 'components/teach/teach'
import Mark from 'components/mark/mark'
import Message from 'components/message/message'
import Communication from 'components/communication/communication'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'feature',
      component: Feature
    },
    {
      path: '/log',
      name: 'log',
      component: Log
    },
    {
      path: '/user/stu',
      name: 'stu',
      component: Stu
    },
    {
      path: '/user/course',
      name: 'course',
      component: Course
    },
    {
      path: '/user/score',
      name: 'score',
      component: Score
    },
    {
      path: '/user/info',
      name: 'info',
      component: Info
    },
    {
      path: '/user/homework',
      name: 'homework',
      component: Homework
    },
    {
      path: '/user/teacher',
      name: 'teacher',
      component: Teacher
    },
    {
      path: '/user/teach',
      name: 'teach',
      component: Teach
    },
    {
      path: '/user/mark',
      name: 'mark',
      component: Mark
    },
    {
      path: '/user/message',
      name: 'message',
      component: Message
    },
    {
      path: '/user/send',
      name: 'send',
      component: Send
    },
    {
      path: '/user/communication',
      name: 'communication',
      component: Communication
    }
  ]
})
