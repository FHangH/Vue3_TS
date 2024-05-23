<template>
    <div class="Person">
       <h1>China</h1>
       <h2 ref="title2">Hefei</h2>
       <h3>ZhongAn</h3>
       <button @click="PrintH2">Print H2</button>
    </div>
</template>

<script lang="ts" setup name="PersonInfo">
    import {ref, defineExpose} from 'vue';

    let title2 = ref();

    defineExpose({title2});

    function PrintH2() 
    {
        console.log(title2.value.innerHTML);
    }
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