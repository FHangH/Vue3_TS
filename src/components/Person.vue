<template>
    <div class="Person">
        <h2>Sum: {{sum}}</h2>
        <button @click="Add">Sum + 1</button>
    </div>
</template>

<script lang="ts" setup name="PersonInfo">
    import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted }  from 'vue';

    let sum = ref(0);

    function Add()
    {
        sum.value += 1;
    }

    // 创建
    console.log("Person创建 => Setup");

    // 挂载前
    onBeforeMount(() => 
    { 
        console.log("Person挂载前 => onBeforeMount"); 
    });

    // 挂载后
    onMounted(() => 
    { 
        console.log("Person挂载后 => onMounted"); 
    });

    // 更新前
    onBeforeUpdate(() => 
    { 
        console.log("Person更新 => onBeforeUpdate"); 
    });

    // 更新后
    onUpdated(() => 
    { 
        console.log("Person更新后 => onUpdated"); 
    });

    // 卸载前
    onBeforeUnmount(() => 
    { 
        console.log("Person卸载前 => onBeforeUnmount"); 
    });

    // 卸载后
    onUnmounted(() => 
    { 
        console.log("Person卸载后 => onUnmounted"); 
    });
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