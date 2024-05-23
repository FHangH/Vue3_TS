<template>
    <div class="Person">
        <h2>{{car.brand}} Price: {{car.price}}</h2>
        <button @click="ChangePrice">ChangePrice</button>

        <hr>
        <h2>GameList:</h2>
        <ul>
            <li v-for="item in games" :key="item.id">{{item.name}}</li>
        </ul>
        <button @click="RenameFirstGameName">RenameFirstGameName</button>
    </div>
</template>

<script lang="ts" setup name="PersonInfo">
    import { ref } from 'vue';

    let car = ref({brand: 'VW', price: 100});

    let games = ref
    ([
        {id: '1000', name: 'CSGO'},
        {id: '1001', name: 'Dota2'},
        {id: '1002', name: 'LOL'},
        {id: '1003', name: 'PUBG'},
        {id: '1004', name: 'APEX'},
        {id: '1005', name: 'Overwatch'},
        {id: '1006', name: 'Valorant'},
    ]);

    function ChangePrice()
    {
        car.value.price += 100;
    }

    function RenameFirstGameName()
    {
        games.value[0].name = 'CS2';
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