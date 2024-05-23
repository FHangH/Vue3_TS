<template>
    <div class="Person">
        <h1>3: watch reactive object type</h1>
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

    watch(() => person.name, (newValue, oldValue) =>
    {
        console.log(`Name changed from ${oldValue} to ${newValue}`);
    });
    watch(() => person.age, (newValue, oldValue) =>
    {
        console.log(`Age changed from ${oldValue} to ${newValue}`);
    });
    watch(() => person.car, (newValue, oldValue) =>
    {
        console.log(`Car changed from ${oldValue.c1} - ${oldValue.c2} to ${newValue.c1} - ${newValue.c2}`);
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