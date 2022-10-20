import Koa from 'koa'
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')

const app = new Koa()
import mongoose from 'mongoose'
import dbConfig from './dbs/config'
import bodyParser from 'koa-bodyparser'
import session from 'koa-generic-session'
import Redis from 'koa-redis'
import passport from './interface/util/passport'
import users from './interface/util/users'

// 使用redis处理cooice
app.keys = ['power', 'keyskeys']
app.proxy = true

app.use(session({
  key: 'love', prefix: 'mt:uid', store: new Redis({
    port: dbConfig.redis.port, // Redis port
    host: dbConfig.redis.host, // Redis host
  })
}))
// 处理post请求参数的格式
app.use(bodyParser({
  extendTypes: ['json', 'form', 'text']
}))


mongoose.connect(dbConfig.dbs, {
  useNewUrlParser: true
})

app.use(passport.initialize())
app.use(passport.session())

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = app.env !== 'production'

async function start() {
  // Instantiate nuxt.js
  const nuxt = new Nuxt(config)

  const {
    host = process.env.HOST || '127.0.0.1',
    port = process.env.PORT || 3000
  } = nuxt.options.server

  // Build in development
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  app.use((ctx) => {
    ctx.status = 200
    ctx.respond = false // Bypass Koa's built-in response handling
    ctx.req.ctx = ctx // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
    nuxt.render(ctx.req, ctx.res)
  })

  // 加入路由
  app.use(users.routes()).use(users.allowedMethods())


  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}

start()
