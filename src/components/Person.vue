<template>
    <div class="Person">
        <h1>A >= 60 && B >= 80; POST Server</h1>
        <h2>A: {{A}}</h2>
        <h2>A: {{B}}</h2>
        <button @click="Aa">A + 10: </button>
        <button @click="Bb">B + 10: </button>
    </div>
</template>

<script lang="ts" setup name="PersonInfo">
    import { watch, watchEffect, ref } from 'vue';

    let A = ref(0);
    let B = ref(0);

    function Aa()
    {
        A.value += 10;
    }

    function Bb()
    {
        B.value += 10;
    }

    // watch([A, B], (value) => 
    // {
    //     if (value[0] >= 60 && value[1] >= 80) alert("POST Server");
    // });

    watchEffect(() =>
    {
        if (A.value >= 60 && B.value >= 80)
        {
            console.log("POST Server"); //POST Server to server.ts
        } //alert("POST Server");
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