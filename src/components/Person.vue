<template>
    <div class="Person">
        <h1>1: watch ref base data type</h1>
        <h2>Current Sum: {{sum}}</h2>
        <button @click="ChangeSum">UpdateSum</button>
    </div>
</template>

<script lang="ts" setup name="PersonInfo">
    import { ref, watch } from 'vue';

    let sum  = ref(0);

    function ChangeSum() { sum.value += 1; }

    const watchHandle = watch(sum, (newValue, oldValue) => 
    { 
        console.log(`Sum changed from ${oldValue} to ${newValue}`);
        if (newValue >= 5)
        {
            watchHandle();
        }
    });
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