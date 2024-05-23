// template: 结构(html) script: 逻辑(js/ts) style: 样式

<template>
    <h2 ref="title2">Hello World</h2>
    <button @click="PrintH2">Print H2</button>
    <Person ref="test"/>
</template>

<script lang="ts" setup name="App">
    import Person from './components/Person.vue';
    import {ref} from 'vue';

    let title2 = ref();

    let test = ref();

    function PrintH2() 
    {
        console.log(title2.value.innerHTML);
        console.log(test.value); 
    }
</script>

<style>
</style>