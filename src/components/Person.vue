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

        <hr>
        <h2>obj.a.b.c: {{obj.a.b.c}}</h2>
        <button @click="ChangeObjectC">ChangeObjectC</button>
    </div>
</template>

<script lang="ts" setup name="PersonInfo">
    import { reactive } from 'vue';

    let car = reactive({brand: 'VW', price: 100});

    let games = reactive
    ([
        {id: '1000', name: 'CSGO'},
        {id: '1001', name: 'Dota2'},
        {id: '1002', name: 'LOL'},
        {id: '1003', name: 'PUBG'},
        {id: '1004', name: 'APEX'},
        {id: '1005', name: 'Overwatch'},
        {id: '1006', name: 'Valorant'},
    ]);

    let obj = reactive
    ({
        a:
        {
            b:
            {
                c: 666
            }
        }
    });

    function ChangePrice()
    {
        car.price += 100;
    }

    function RenameFirstGameName()
    {
        games[0].name = 'CS2';
    }

    function ChangeObjectC()
    {
        obj.a.b.c = 777;
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