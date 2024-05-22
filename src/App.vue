// template: 结构(html) script: 逻辑(js/ts) style: 样式

<template>
    <Person/>
</template>

<script lang="ts">
    import Person from './components/Person.vue';

    export default 
    {
        name: 'App', // 组件名称，可选，但建议填写，方便调试时识别组件
        components: { Person }, // 引入组件，可选，但建议填写，方便调试时识别组件
    }
</script>

<style>
</style>