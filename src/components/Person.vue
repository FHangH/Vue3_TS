<template>
    <div class="Person">
        <h2>Name: {{name}}</h2>
        <h2>Age: {{age}}</h2>
        <button @click="ChangeName">ChangeName</button>
        <button @click="ChangeAge">ChangeAge</button>
        <button @click="ShowTel">Show Telephone</button>
    </div>
</template>

<script lang="ts" setup name="PersonInfo">
    import { ref } from 'vue';

    let name = ref("John");
    let age = ref(30);
    let tel = "123456789";

    function ChangeName()
    {
        name.value = "Tom";
    }
    function ChangeAge()
    {
        age.value += 1;
    }
    function ShowTel()
    {
        alert(tel);
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
</style>