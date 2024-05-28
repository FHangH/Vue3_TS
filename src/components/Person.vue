<template>
    <div class="Person">
        <h2>Sum: {{sum}} -- {{bigSum}}</h2>
        <button @click="Add">Sum + 1</button>
        <hr>
        <img v-for="(dog, index) in dogList" :src="dog" :key="index">
        <br>
        <button @click="ChangeDog">ChangeDog</button>
    </div>
</template>

<script lang="ts" setup name="PersonInfo">
    import useSum from '@/hooks/useSum';
    import useDog from '@/hooks/useDog';

    const { sum, bigSum, Add } = useSum();
    const { dogList, ChangeDog } = useDog();
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

    img
    {
        width: auto;
        height: 100px;
        margin-right: 10px;
    }
</style>