import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { RouterContext, match } from 'react-router'
import reducer from '../common/reducers'
import routes from '../common/routes'
import fetch from 'node-fetch'

const handleRender = async (ctx, next) => {
    if (ctx.path.includes('/api/')) {
        await next()
        return
    }
    let res = await fetch('http://localhost:3000/api/jandan/1')
    let json = await res.json()
    match({ routes, location: ctx.request.url }, (error, redirectLocation, renderProps) => {
        if (error) {
            ctx.response.status(500)
            ctx.response.body = error.message
        } else if (redirectLocation) {
            ctx.redirect(302, redirectLocation.pathname + redirectLocation.search)
        } else if (renderProps == null) {
            ctx.response.status(404)
            ctx.response.body = 'Not found'
        }

        const initialState = {
            jandan: {
                page: 1,
                urls: json.imgUrls,
                current: 0
            }
        }

        
        const store = createStore(reducer, initialState, applyMiddleware(thunk))
        const html = renderToString(
            <Provider store={store}>
                <RouterContext {...renderProps} />
            </Provider>
        )
        const finalState = store.getState()
        ctx.response.type = 'text/html'
        ctx.response.body = renderFullPage(html, finalState)
    })

}

const renderFullPage = (html, preloadedState) => {
    const assets = webpack_isomorphic_tools.assets()
    let style = []
    style = Object.keys(assets.assets).map((style, key) =>
                `<style type="text/css">
                    ${assets.assets[style]}
                </style>`).join('')
    return `
    <!doctype html>
    <html>
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=1">
            <meta name="referrer" content="no-referrer">
            <title>Isomorphic App</title>
            ${style}    
        </head>
        <body>
            <div id="root">${html}</div>
            <script>
            window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\x3c')}
            </script>
            <script src="/static/bundle.js"></script>
        </body>
    </html>
    `
}

export default handleRender