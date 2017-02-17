import Koa from 'koa'
import serve from 'koa-static'
import bodyParser from 'koa-bodyparser'

import rest from './rest'
import controller from './controller'

import devWebpack from './client'
import isomorphic from './isomorphic'

const app = new Koa()
// app.use(serve(path.join(__dirname, '/static')))

app.use(bodyParser())

app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next()
})

// client devMiddleware
devWebpack(app)

// server side render 
isomorphic(app)

// rest api
app.use(rest.restify())

// add controllers:
app.use(controller())

// listen on port 3000
app.listen(3000)
console.log('app started at port 3000...')