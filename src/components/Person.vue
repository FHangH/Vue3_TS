<template>
    <div class="Person">
        <h1>3: watch reactive object type</h1>
        <h2>Name: {{person.name}}</h2>
        <h2>Age: {{person.age}}</h2>
        <button @click="ChangeInfo">UpdateInfo</button>
        <button @click="ChangePerson">ChangePerson</button>
    </div>
</template>

<script lang="ts" setup name="PersonInfo">
    import { ref, watch, reactive } from 'vue';

    let person = reactive
    ({
        name: 'Alice',
        age: 20,
    });

    function ChangeInfo()
    {
        person.name += '1';
        person.age += 1;
    }

    function ChangePerson()
    {
        Object.assign(person, { name: 'Bob', age: 99 });
    }

    // 第一参数：监视的数据
    // 第二参数：数据变化时执行的回调函数，该函数接收三个参数：newValue、oldValue、onInvalidate。
    // 第三参数：配置选项，可选。
    const watchStopHandle = watch(person, (newValue, oldValue) =>
    {
        console.log(`The new name is ${newValue.name}`);
        console.log(`The new age is ${newValue.age}`);

        if (newValue.age >= 101)
        {
            watchStopHandle();
        }
    });
    // watch reactive 默认开启深度监听。当数据变化时，会执行回调函数。
    // 回调函数的参数：newValue、oldValue。
    // 返回值：一个函数，用于停止监听。
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