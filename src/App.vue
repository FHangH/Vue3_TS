// template: 结构(html) script: 逻辑(js/ts) style: 样式

<template>
    <div class="app">
        <h1>Hello World</h1>
        <Person></Person>
    </div>
</template>

<script lang="ts">
    import Person from './components/Person.vue';

    export default 
    {
        name: 'App', // 组件名称，可选，但建议填写，方便调试时识别组件
        components: { Person }, // 引入组件，可选，但建议填写，方便调试时识别组件
    }
</script>

<style>s
    .app
    {
        background-color: #f0f0f0;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
</style>