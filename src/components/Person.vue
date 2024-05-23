<template>
    <div class="Person">
        <h2>Name: {{name}}</h2>
        <h2>Age: {{age}}</h2>
        <button @click="ChangeName">ChangeName</button>
        <button @click="ChangeAge">ChangeAge</button>
    </div>
</template>

<script lang="ts" setup name="PersonInfo">
    import { reactive, ref, toRefs} from 'vue';

    let person = reactive
    ({
        name: '张三', age: 30
    });

    let {name, age} = toRefs(person);

    function ChangeName()
    {
        name.value = '李四';
    }

    function ChangeAge()
    {
        age.value = 40;
    }
</script>

<script lang="ts">
    export default { name: 'PersonInfo' }
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