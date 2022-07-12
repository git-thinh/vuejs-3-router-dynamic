﻿import express from 'express'
import { createSSRApp } from 'vue'
import { renderToString } from 'vue/server-renderer'

const server = express()
server.use(express.static('dist'));

// server.js (irrelevant code omitted)
import { createApp } from './src/main.js'

server.get('/', (req, res) => {

    const app = createApp();

    renderToString(app).then((html) => {
        res.send(`
                <!DOCTYPE html>
                <html>
                  <head>
                    <title>Vue SSR Example</title>
                  </head>
                  <body>
                    <div id="app">${html}</div>
                  </body>
                </html>
        `);
    })
})

server.listen(3000, () => {
    console.log('ready')
})