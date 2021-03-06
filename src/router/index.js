import Vue from 'vue'
import Router from 'vue-router'
// import Personal from './personal'

Vue.use(Router)



let RouteList = [
  {
    path: '/',
    component: resolve => require(['~/views/Layout/App.vue'], resolve),
    meta: {
      title: '首页',
      keepAlive: false,
    },
    children: [
      {
        path: '/',
        name: 'Dashboard',
        meta: {
          title: '首页',
          keepAlive: false
        },
        component: resolve => require(['~/views/Home/Index.vue'], resolve),
      },
      {
        path: '/student_Manage',
        name: 'StudentManage',
        meta: {
          title: '学生管理',
          keepAlive: false
        },
        component: resolve => require(['~/views/studentManage/index.vue'], resolve),
      },
      {
          path: '/student_Detail',
          name: 'StudentDetail',
          meta: {
              title: '学生详情',
              keepAlive: false
          },
          component: resolve => require(['~/views/studentManage/detail.vue'], resolve),
      },
      {
        path: '/class_manage',
        name: 'ClassManage',
        meta: {
          title: '班级管理',
          keepAlive: false
        },
        component: resolve => require(['~/views/classManage/index.vue'], resolve),
      },
      {
          path: '/class_Detail',
          name: 'ClassDetail',
          meta: {
              title: '班级详情',
              keepAlive: false
          },
          component: resolve => require(['~/views/classManage/detail.vue'], resolve),
      },
      {
        path: '/relay_manage',
        name: 'relayManage',
        meta: {
          title: '接送人管理',
          keepAlive: false
        },
        component: resolve => require(['~/views/relayPeopleManage/index.vue'], resolve),
      },
      {
        path: '/to_school_record',
        name: 'toSchoolRecord',
        meta: {
          title: '今日到校记录',
          keepAlive: true
        },
        component: resolve => require(['~/views/recordManage/recordToSchool.vue'], resolve),
      },
      {
        path: '/leave_school_record',
        name: 'leaveSchoolRecord',
        meta: {
            title: '今日离校记录',
            keepAlive: true
        },
        component: resolve => require(['~/views/recordManage/recordLeaveSchool.vue'], resolve),
      },
      {
        path: '/history_record',
        name: 'historyRecord',
        meta: {
            title: '接送历史记录',
            keepAlive: true
        },
        component: resolve => require(['~/views/recordManage/recordHistory.vue'], resolve),
      },
      {
        path: '/system_manage',
        name: 'systemManage',
        meta: {
          title: '系统管理',
          keepAlive: true
        },
        component: resolve => require(['~/views/systemManage/index.vue'], resolve),
      },
      // {
      //   path: '/system_manage',
      //   name: 'systemManage',
      //   meta: {
      //     title: '角色列表',
      //     keepAlive: true
      //   },
      //   component: resolve => require(['~/views/PermissionManage/Role/Role.vue'], resolve),
      // },
      // {
      //   path: '/permission_list',
      //   name: 'PermissionList',
      //   meta: {
      //     title: '权限列表',
      //     keepAlive: true
      //   },
      //   component: resolve => require(['~/views/PermissionManage/Permission/Index.vue'], resolve),
      // },
      //个人中心，可能有修改密码，头像修改等路由
      // Personal.index,
    ]
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '后台登录',
      keepAlive: false
    },
    components: {
      blank: resolve => require(['~/views/Login/Login.vue'], resolve),
    }
  },

]


// RouteList[0].children.push({
//   path: '/build_code',
//   name: 'BuildCode',
//   meta: {
//     title: '构建代码',
//     keepAlive: true
//   },
//   component: resolve => require(['~/views/DevelopmentTool/Build.vue'], resolve),
// });

export default new Router({routes: RouteList})


