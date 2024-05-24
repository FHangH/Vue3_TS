<template>
    <div class="Person">
        <ul>
            <li v-for="item in list" :key="item.id">
                {{item.name}} - {{item.age}}
            </li>
        </ul>
    </div>
</template>

<script lang="ts" setup name="PersonInfo">
    import { defineProps, withDefaults } from 'vue';
    import { type PersonList } from '@/types';

    // 定义组件的属性类型和结构，并使用defineProps进行声明。
    // defineProps(['list']);
    
    // 使用类型断言来指定list的类型。
    // defineProps<{list: PersonList}>();

    withDefaults
    (
        defineProps<{list?: PersonList}>(), 
        {
            list: () => [{ id: '123546', name: '张三', age: 18}]
        }
    );
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