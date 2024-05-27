// template: 结构(html) script: 逻辑(js/ts) style: 样式

<template>
    <Person v-if="IsShow"/>
</template>

<script lang="ts" setup name="App">
    import Person from './components/Person.vue';
    import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue';
    
    const IsShow = ref(true);

    // 创建
    console.log("App创建 => Setup");

    // 挂载前
    onBeforeMount(() => 
    { 
        console.log("App挂载前 => onBeforeMount"); 
    });

    // 挂载后
    onMounted(() => 
    { 
        console.log("App挂载后 => onMounted"); 
    });

    // 更新前
    onBeforeUpdate(() => 
    { 
        console.log("App更新 => onBeforeUpdate"); 
    });

    // 更新后
    onUpdated(() => 
    { 
        console.log("App更新后 => onUpdated"); 
    });

    // 卸载前
    onBeforeUnmount(() => 
    { 
        console.log("App卸载前 => onBeforeUnmount"); 
    });

    // 卸载后
    onUnmounted(() => 
    { 
        console.log("App卸载后 => onUnmounted"); 
    });
</script>