
<template>
    <h1>404 - Page Not Found</h1>
    <router-link to="/">Home</router-link> |
    <router-link :to="{ name: 'Dynamic' }">Dynamic</router-link> |
    <router-link to="/test1">Test 1</router-link>|
    <router-link to="/test2">Test 2</router-link>
</template>