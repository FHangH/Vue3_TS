// template: 结构(html) script: 逻辑(js/ts) style: 样式

<template>
    <Person :list="personList"/>
</template>

<script lang="ts" setup name="App">
    import Person from './components/Person.vue';
    import { reactive } from 'vue';
    import { type PersonList } from '@/types';

    let personList = reactive<PersonList>
        ([
            { id: '123546', name: '张三', age: 18},
            { id: '123547', name: '李四', age: 20},
            { id: '123548', name: '王五', age: 22},
        ]);

</script>