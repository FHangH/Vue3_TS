<template>
    <div class="Person">
    </div>
</template>

<script lang="ts" setup name="PersonInfo">
    import { type IPerson, type PersonList } from '@/types';

    // let person: IPerson = { id: '123456', name: '张三', age: 30}
    let personList: PersonList = 
        [
            {id: '123456', name: '张三', age: 30},
            {id: '000000', name: 'lisi', age: 10}
        ];
</script>

<style scoped>
    .Person
    {
        background-color: skyblue;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }

    button
    {
        margin-right: 5px;
    }

    li
    {
        font-size: 20px;
    }
</style>