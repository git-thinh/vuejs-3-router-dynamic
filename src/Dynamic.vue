<template>
    <h1>This is page load dynamic</h1>
    <router-link :to="{ name: 'Home' }">Home</router-link> |
    <router-link to="/test1">Test 1</router-link> |
    <router-link to="/test2">Test 2</router-link> |
    <router-link :to="{ name: 'Test2_name', params: { name: new Date().getTime() } }">Test + name</router-link>
</template>