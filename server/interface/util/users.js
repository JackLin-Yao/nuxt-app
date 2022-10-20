import Router from 'koa-router'
import Redis from 'koa-redis'
import User from '../../dbs/models/user'
import nodeMailer from 'nodemailer'
import axios from './axios'
import dbConfig from '../../dbs/config'
import Passport from './passport'

let router = new Router({
  prefix: '/users'
})

let Store = new Redis().client;
//注册接口
router.post('/signup',
  async (ctx) => {
    const { username, password, email, code } = ctx.request.body;
    if (code) {
      const saveCode = await Store.hget(`nodemail:${username}`, 'code')
      const saveExpire = await Store.hget(`nodemail:${username}`, 'expire')

      console.log(saveCode, 'saveCode', code,)
      if (code === saveCode) {
        if (new Date().getTime() - saveExpire > 0) {
          ctx.body = {
            status: false,
            msg: '验证码已过期，请重新尝试'
          }
          return false
        }
      } else {
        ctx.body = {
          status: false,
          msg: '请填写正确的验证码'
        }
        return
      }
    }
    // 如果找到用户名
    let user = await User.find({ username })
    if (user.length) {
      ctx.body = {
        status: false,
        msg: '昵称已被注册'
      }
      return
    }
    let nuser = await User.create({ username, password, email })
    if (nuser) {
      let res = await axios.post('/users/signin', { username, password })
      if (res.data&&res.data.code===0) {
        ctx.body = {
          code:0,
          msg: '注册成功',
          user:res.data.user
        }
      } else {
        ctx.body = {
          code: -1,
          msg: '注册失败,请重试'
        }
      }
    }

  })
//登陆接口
router.post('/signin', async (ctx, next) => {
  return Passport.authenticate('local', function(err, user, info, status) {
    if (err) {
      ctx.body = {
        status: false,
        msg: err
      }
    } else {
      if (user) {
        ctx.body = {
          status: true,
          msg: '登录成功',
          user
        }
       // 触发序列号存储redis
        return ctx.login(user)
      } else {
        ctx.body = {
          code: false,
          msg: info
        }
      }
    }
  })(ctx, next)
})



//验证码接口
router.post('/verify', async (ctx) => {
  let username = ctx.request.body.username
  const saveExpire = await Store.hget(`nodemail:${username}`, 'expire')
  if (saveExpire && new Date().getTime() - saveExpire < 0) {
    ctx.body =  {
      status: false,
      msg: '验证请求过于频繁，1分钟内1次'
    }
    return false
  }
  let transporter = nodeMailer.createTransport({
    host:dbConfig.smtp.host,
    port:587,
    secure:false,
    auth: {
      user: dbConfig.smtp.user,
      pass: dbConfig.smtp.pass
    }
  })
  let ko = {
    code: dbConfig.smtp.code(),
    expire: dbConfig.smtp.expire(),
    email: ctx.request.body.email,
    user: ctx.request.body.username
  }
  let mailOptions = {
    from: `"认证邮件" <${dbConfig.smtp.user}>`,
    to: ko.email,
    subject: '注册码',
    html: `您正在注册，您的邀请码是${ko.code}`
  }
  await transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error)
    } else {
      Store.hmset(`nodemail:${ko.user}`, 'code', ko.code, 'expire', ko.expire, 'email', ko.email)
    }
  })
  ctx.body = {
    status: true,
    msg: '验证码已发送，可能会有延时，有效期1分钟'
  }
})


router.get('/getUser', async (ctx) => {
  if (ctx.isAuthenticated()) {
    const {username, email} = ctx.session.passport.user
    ctx.body={
      status: true,
      user:username,
      email
    }
  }else{
    ctx.body={
       status: false,
      user:'',
      email:''
    }
  }
})

router.get('/exit', async (ctx, next) => {
  await ctx.logout()
  if (!ctx.isAuthenticated()) {
    ctx.body = {
      status: true,
      msg: '退出成功'
    }
  } else {
    ctx.body = {
      status: false,
      msg: '退出失败，请重试'
    }
  }
})


export default router
