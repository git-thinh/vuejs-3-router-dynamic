import fs from 'fs'
import path from 'path'

import { createSSRApp } from 'vue'
import { renderToString } from 'vue/server-renderer'

//const app = createSSRApp({
//    data: () => ({ count: 1 }),
//    template: `<button @click="count++">{{ count }}</button>`
//})
//renderToString(app).then((html) => {
//    console.log(html);
//    fs.writeFileSync('./dist/render.html', html);
//})

import buildApp from './app';
const { app, router } = buildApp();
router.isReady().then(() => {
    app.mount('#app', true);
});

//(async (r, a) => {
//    await r.isReady();
//    //a.mount('#app', true);

//    renderToString(app).then((html) => {
//        console.log(html);
//        fs.writeFileSync('./dist/render.html', html);
//    })

//})(router, app);