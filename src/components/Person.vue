<template>
    <div class="Person">
        <h1>4: watch array type</h1>
        <h2>Name: {{person.name}}</h2>
        <h2>Age: {{person.age}}</h2>
        <h2>Car: {{person.car.c1}} - {{person.car.c2}}</h2>
        <button @click="ChangeName">ChangeName</button>
        <button @click="ChangeAge">ChangeAge</button>
        <button @click="ChangeCar1">ChangeCar1</button>
        <button @click="ChangeCar2">ChangeCar2</button>
        <button @click="ChangeAllCar">ChangeAllCar</button>
    </div>
</template>

<script lang="ts" setup name="PersonInfo">
    import { watch, reactive } from 'vue';

    let person = reactive
    ({
        name: 'Alice',
        age: 20,
        car:
        {
            c1: 'Audi',
            c2: 'BMW'
        }
    });

    function ChangeName()
    {
        person.name += '!';
    }

    function ChangeAge()
    {
        person.age += 1;
    }

    function ChangeCar1()
    {
        person.car.c1 = 'Benz';
    }

    function ChangeCar2()
    {
        person.car.c2 = 'Porsche';
    }

    function ChangeAllCar()
    {
        person.car = {c1: 'Ford', c2: 'Fiat'};
    }

    // watch([()=>person.name, ()=>person.car.c1], (newValues, oldValues) =>
    // {
    //     console.log(`Name changed from ${oldValues[0]} to ${newValues[0]}`);
    //     console.log(`Car changed from ${oldValues[1]} to ${newValues[1]}`);
    // });

    watch([()=>person.name, person.car], (newValues, oldValues) =>
    {
        console.log(`Name changed from ${oldValues[0]} to ${newValues[0]}`);
        console.log(`Car changed from ${oldValues[1]} to ${newValues[1]}`);
    }, {deep: true});
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