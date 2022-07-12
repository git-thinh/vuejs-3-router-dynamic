## Project create
vue create app-name --> choose Vue-3

## Project setup
yarn install

### Compiles and hot-reloads for development
yarn dev

### Compiles and minifies for production
yarn build

------------------------------------------------------
### Fix bugs 
# Use //eslint-disable-next-line to ignore the next line.
# Use /* eslint-disable */ to ignore all warnings in a file.
yarn remove @vue/cli-plugin-eslint

# Missing vue-router
yarn add vue-router

------------------------------------------------------
### Render to HTML
# To load an ES module, set "type": "module" in the package.json

node render.js

yarn vue-cli-service build --target lib src/Dynamic.vue --inline-vue
yarn vue-cli-service build --target lib src/Dynamic.vue --name dyn [entry]
yarn vue-cli-service build --mode development --watch

------------------------------------------------------
### Docs

See [Configuration Reference](https://cli.vuejs.org/config/).
