<template>
    <h1>Test 2</h1>
    <h1>The user is {{ name }}</h1>
    <router-link :to="{ name: 'Dynamic' }">Dynamic</router-link> |
    <router-link to="/test1">Test 1</router-link>
</template>

<script>
export default {
  props: ["name"],
};
</script>