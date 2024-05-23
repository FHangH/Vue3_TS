<template>
    <div class="Person">
        <h2>{{car.brand}} Price: {{car.price}}</h2>
        <button @click="ChangePrice">ChangePrice</button>
        <button @click="ChangeCar">ChangeCar</button>

        <hr>
        <h2>GameList:</h2>
        <ul>
            <li v-for="item in games" :key="item.id">{{item.name}}</li>
        </ul>
        <button @click="RenameFirstGameName">RenameFirstGameName</button>
    </div>
</template>

<script lang="ts" setup name="PersonInfo">
    import { ref, reactive } from 'vue';

    // let car = reactive({brand: 'VW', price: 100});
    let car = ref({brand: 'VW', price: 100});

    // 基本数据响应：ref
    // 对象响应（对象层级简单）：ref，reactive 都可以，推荐 ref，因为 ref 更简单，不需要写 .value 访问属性。
    // 对象层级复杂：reactive，因为 reactive 支持对象层级响应，ref 则不支持。

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

    function ChangeCar()
    {
        // car = reactive({brand: 'BMW', price: 200});
        // reactive 重分配对象后，将不再是响应式数据
        //Object.assign(car, {brand: 'BMW', price: 200});

        // ref 重分配后，可以正常响应数据
        car.value = {brand: 'BMW', price: 200};
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